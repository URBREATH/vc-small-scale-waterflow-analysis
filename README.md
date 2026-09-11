# Small Scale Waterflow Analysis

Small Scale Waterflow Analysis (aka Terrain Analysis) is a [VC Map](https://github.com/virtualcitySYSTEMS/map-ui) plugin for exploring terrain-based water flow. It samples the active Cesium terrain, calculates downhill flow and flow accumulation, and displays the result in the map.

## Capabilities

- Open the analysis tool from the VC Map toolbox.
- Draw either a polygon or a bounding box to define the analysis area.
- Sample terrain heights on an approximately 1 metre grid.
- Calculate eight-direction downhill flow and flow accumulation.
- Classify cells as source, transition, collection, or sink areas.
- Display the accumulation result as a temporary, georeferenced imagery layer.
- Produce raster and/or GeoJSON results through the reusable `terrainWaterFlow` service:
  - height raster;
  - flow-accumulation raster; or
  - a GeoJSON `FeatureCollection` containing grid-cell points with height, accumulation, height class, sink status, and grid index properties.
- Export raster results as GeoTIFF. Accumulation exports can include an RGB color map and an SLD style; georeferencing companion world files are generated for uploads.
- Optionally upload GeoTIFF, world-file, SLD, and selected-area GeoJSON files to MinIO.
- Optionally register uploaded files as a dataset and distributions in an IDRA catalogue.
- Provide localized UI text for English, German, Belarusian, Romanian, Italian, Czech, Estonian, Spanish, Finnish, Danish, and Greek.

The analysis window currently runs an accumulation raster analysis and adds the generated PNG as a single imagery layer. The lower-level service also supports height-only, accumulation-only, both-raster, GeoJSON-only, and combined GeoJSON/raster output modes.

## Requirements

### VC Map host

The plugin is built for VC Map `6.1` and expects the host application to provide:

- an active map with a Cesium scene and terrain provider;
- the VC Map UI, core, and Cesium engine packages listed below;
- a browser with WebGL, Canvas, Fetch, Blob, FormData, and `URL` support; and
- CORS access to any configured catalogue or object-storage endpoint.

The selected area must not exceed **1,000,000 m²**. The terrain sampler uses a roughly 1 m grid, so processing time and memory increase rapidly with the selected area and terrain resolution.

### Operating systems

There are no OS-specific runtime dependencies. The plugin runs in the browser inside a compatible VC Map host, so the supported desktop operating systems are determined by the host application's browser support. Development and builds can be performed on Windows, macOS, or Linux with a compatible Node.js and npm installation. This project does not declare a minimum Node.js version.

## Dependencies

The VC Map packages are peer dependencies and must normally be supplied by the host application.

### Runtime dependencies

| Package                | Version   |
| ---------------------- | --------- |
| `@vcmap-cesium/engine` | `^11.0.2` |
| `@vcmap/core`          | `^6.1.10` |
| `@vcmap/ui`            | `^6.1.13` |
| `ol`                   | `^10.6.1` |
| `vue`                  | `~3.4.38` |
| `vuetify`              | `~3.7.14` |
| `geotiff`              | `^3.0.1`  |

`geotiff` is bundled as a direct dependency and is used to create GeoTIFF output in the browser.

### Development dependencies

The development toolchain includes `@vcmap/plugin-cli`, TypeScript, `vue-tsc`, Vitest, the V8 coverage provider, JSDOM, `jest-canvas-mock`, `resize-observer-polyfill`, and `@vcsuite/eslint-config`.

## Installation and development

Install the dependencies:

```sh
npm install
```

Useful commands:

```sh
npm run type-check # Type-check the Vue and TypeScript sources
npm test          # Run the Vitest test suite
npm run lint      # Run ESLint and Prettier checks
npm run build     # Build the plugin and inject browser polyfills
npm run pack      # Create the distributable package
npm run start     # Start the VC Map plugin development server
npm run preview   # Preview a built plugin
```

The build and packaging commands generate the distributable files under `dist/`. The package also includes `src/`, `plugin-assets/`, `README.md`, `CHANGELOG.md`, and `LICENSE.md` when published.

## Configuration

The plugin accepts the following configuration properties:

| Property                 | Default                                                        | Description                                                             |
| ------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `allowMinioUpload`       | `false`                                                        | Shows the upload action when enabled.                                   |
| `minioEndpoint`          | `https://urbreath.virtualcitymap.de/minioproxy`                | MinIO proxy/endpoint used for uploads.                                  |
| `minioBucketName`        | `vcs-analysis`                                                 | Bucket used for uploaded analysis files.                                |
| `allowCatalogueRegistry` | `false`                                                        | Registers uploaded files in the configured IDRA catalogue when enabled. |
| `catalogueEndpoint`      | `https://urbreath.virtualcitymap.de/idraproxy/api/datasetngsi` | Base endpoint for IDRA dataset and distribution registration.           |

Example configuration:

```json
{
  "name": "terrainAnalysis",
  "allowMinioUpload": false,
  "minioEndpoint": "https://urbreath.virtualcitymap.de/minioproxy",
  "minioBucketName": "vcs-analysis",
  "allowCatalogueRegistry": false,
  "catalogueEndpoint": "https://urbreath.virtualcitymap.de/idraproxy/api/datasetngsi"
}
```

The repository's `config.json` enables both remote integrations for its deployment configuration. Change these flags and endpoints to match the target VC Map environment. Remote services must provide the required authentication and browser CORS policy.

## Analysis details

For each sampled grid cell, the plugin:

1. Uses the steepest of the eight neighbouring downhill directions when the drop exceeds 0.1 m.
2. Marks cells without a downhill direction as sinks.
3. Propagates upstream contributions through the flow network to calculate accumulation.
4. Classifies terrain height into source, transition, and collection ranges for visualization.

Accumulation styling uses green tones for high source areas, blue tones for flow and collection channels, and dark red for sinks. The generated GeoJSON points retain the calculated values for further processing.

## Output and integration behavior

- The selected feature is kept in Web Mercator (`EPSG:3857`) for analysis. GeoJSON upload is written as `EPSG:4326`.
- GeoTIFF files contain Web Mercator georeferencing metadata and use compressed output when exported by the UI.
- MinIO uploads are organized by application title, `waterflowAnalysis`, timestamp, and the optional filename suffix entered in the upload dialog.
- When catalogue registration is enabled, the plugin creates IDRA distribution records for GeoJSON, GeoTIFF, world-file, and SLD files, then registers a dataset using the active map viewpoint.
- The temporary imagery layer is removed when the analysis window is closed or the component is unmounted.

## Current limitations and deployment notes

- The UI uses the extent of the drawn feature for the raster analysis. For a polygon, the current implementation therefore analyzes its bounding extent rather than masking every grid cell to the polygon boundary.
- The UI requests terrain-only heights. The service can optionally include heights from loaded 3D Tilesets when called with `include3DTilesetHeights: true`.
- A Cesium widget, active map, and usable terrain provider are required; the plugin does not provide terrain data itself.
- MinIO and IDRA are optional remote services. Configure their authentication, permissions, TLS, and CORS policy in the deployment environment. Do not commit access keys, secret keys, or bearer tokens to a public client bundle.

## License

This project is released under the MIT License. See [LICENSE.md](LICENSE.md).
