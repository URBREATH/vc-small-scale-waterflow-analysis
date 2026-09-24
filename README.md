# Small Scale Waterflow Analysis

**Provided by:** VC Map Project (virtualcitySYSTEMS)

## Description

Small Scale Waterflow Analysis, also known as Terrain Analysis, is a VC Map plugin for exploring terrain-based water flow. It samples active Cesium terrain, calculates downhill flow and flow accumulation, and displays the results in the map.

## Installation Prerequisites

- A compatible VC Map `6.1` host with an active map, Cesium scene, and terrain provider.
- A browser with WebGL, Canvas, Fetch, Blob, FormData, and `URL` support.
- CORS access to any configured catalogue or object-storage endpoint.
- For development and builds, Node.js and npm. The project does not specify a minimum Node.js version.

## Installation Instructions

1. Install dependencies with `npm install`.
2. Build the plugin with `npm run build`.
3. Create the distributable package with `npm run pack`. Build and packaging outputs are generated under `dist/`.
4. Deploy the generated package to a compatible VC Map `6.1` host using that environment’s plugin deployment process. Host-specific deployment steps are not included in the provided documentation.

## Built Image Registry

Not specified in the provided documentation.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md).

Copyright 2025 ado tadolphi@vc.systems

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## External technical resources

- [VC Map UI](https://github.com/virtualcitySYSTEMS/map-ui)
- [MinIO proxy endpoint](https://urbreath.virtualcitymap.de/minioproxy) — default endpoint for optional uploads.
- [IDRA catalogue endpoint](https://urbreath.virtualcitymap.de/idraproxy/api/datasetngsi) — default endpoint for optional catalogue registration.
- [GeoTIFF package](https://www.npmjs.com/package/geotiff)

## User Guide References

No separate user guide or FAQ links were included in the provided documentation. Usage details are included under [Additional Information](#additional-information).

## Additional Information

### Capabilities

- Open the analysis tool from the VC Map toolbox.
- Draw a polygon or bounding box to define the analysis area.
- Sample terrain heights on an approximately 1 m grid.
- Calculate eight-direction downhill flow and flow accumulation.
- Classify cells as source, transition, collection, or sink areas.
- Display accumulation results as a temporary, georeferenced imagery layer.
- Use the reusable `terrainWaterFlow` service to produce:
  - A height raster.
  - A flow-accumulation raster.
  - A GeoJSON `FeatureCollection` of grid-cell points with height, accumulation, height class, sink status, and grid index properties.
- Export raster results as GeoTIFF. Accumulation exports can include an RGB color map and SLD style. Georeferencing companion world files are generated for uploads.
- Optionally upload GeoTIFF, world-file, SLD, and selected-area GeoJSON files to MinIO.
- Optionally register uploaded files as a dataset and distributions in an IDRA catalogue.
- Provide localized UI text in English, German, Belarusian, Romanian, Italian, Czech, Estonian, Spanish, Finnish, Danish, and Greek.

The analysis window currently runs an accumulation raster analysis and adds the generated PNG as a single imagery layer. The lower-level service also supports height-only, accumulation-only, both-raster, GeoJSON-only, and combined GeoJSON/raster output modes.

### Requirements and dependencies

The selected area must not exceed **1,000,000 m²**. The terrain sampler uses an approximately 1 m grid, so processing time and memory use increase rapidly with selected area and terrain resolution.

The VC Map packages are peer dependencies and are normally supplied by the host application.

**Runtime dependencies**

| Package | Version |
| --- | --- |
| `@vcmap-cesium/engine` | `^11.0.2` |
| `@vcmap/core` | `^6.1.10` |
| `@vcmap/ui` | `^6.1.13` |
| `ol` | `^10.6.1` |
| `vue` | `~3.4.38` |
| `vuetify` | `~3.7.14` |
| `geotiff` | `^3.0.1` |

`geotiff` is bundled as a direct dependency and is used to create GeoTIFF output in the browser.

**Development dependencies**

The development toolchain includes `@vcmap/plugin-cli`, TypeScript, `vue-tsc`, Vitest, the V8 coverage provider, JSDOM, `jest-canvas-mock`, `resize-observer-polyfill`, and `@vcsuite/eslint-config`.

There are no OS-specific runtime dependencies. The plugin runs in a browser inside a compatible VC Map host; supported desktop operating systems therefore depend on the host application’s browser support. Development and builds can be performed on Windows, macOS, or Linux with a compatible Node.js and npm installation.

### Development commands

```sh
npm install
```

Useful commands:

```sh
npm run type-check # Type-check the Vue and TypeScript sources
npm test           # Run the Vitest test suite
npm run lint       # Run ESLint and Prettier checks
npm run build      # Build the plugin and inject browser polyfills
npm run pack       # Create the distributable package
npm run start      # Start the VC Map plugin development server
npm run preview    # Preview a built plugin
```

The published package includes `src/`, `plugin-assets/`, `README.md`, `CHANGELOG.md`, and `LICENSE.md`.

### Configuration

| Property | Default | Description |
| --- | --- | --- |
| `allowMinioUpload` | `false` | Shows the upload action when enabled. |
| `minioEndpoint` | `https://urbreath.virtualcitymap.de/minioproxy` | MinIO proxy or endpoint used for uploads. |
| `minioBucketName` | `vcs-analysis` | Bucket used for uploaded analysis files. |
| `allowCatalogueRegistry` | `false` | Registers uploaded files in the configured IDRA catalogue when enabled. |
| `catalogueEndpoint` | `https://urbreath.virtualcitymap.de/idraproxy/api/datasetngsi` | Base endpoint for IDRA dataset and distribution registration. |

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

The repository’s `config.json` enables both remote integrations for its deployment configuration. Adjust the flags and endpoints for the target VC Map environment. Remote services must provide the required authentication and browser CORS policy.

### Analysis details

For each sampled grid cell, the plugin:

1. Uses the steepest of the eight neighbouring downhill directions when the drop exceeds `0.1 m`.
2. Marks cells without a downhill direction as sinks.
3. Propagates upstream contributions through the flow network to calculate accumulation.
4. Classifies terrain height into source, transition, and collection ranges for visualization.

Accumulation styling uses green tones for high source areas, blue tones for flow and collection channels, and dark red for sinks. Generated GeoJSON points retain the calculated values for further processing.

### Output and integration behavior

- The selected feature is kept in Web Mercator (`EPSG:3857`) for analysis. GeoJSON uploads are written as `EPSG:4326`.
- GeoTIFF files contain Web Mercator georeferencing metadata and use compressed output when exported by the UI.
- MinIO uploads are organized by application title, `waterflowAnalysis`, timestamp, and the optional filename suffix entered in the upload dialog.
- When catalogue registration is enabled, the plugin creates IDRA distribution records for GeoJSON, GeoTIFF, world-file, and SLD files, then registers a dataset using the active map viewpoint.
- The temporary imagery layer is removed when the analysis window is closed or the component is unmounted.

### Current limitations and deployment notes

- The UI uses the extent of the drawn feature for raster analysis. For a polygon, it analyzes the polygon’s bounding extent rather than masking each grid cell to the polygon boundary.
- The UI requests terrain-only heights. The service can optionally include heights from loaded 3D Tilesets when called with `include3DTilesetHeights: true`.
- A Cesium widget, active map, and usable terrain provider are required; the plugin does not provide terrain data itself.
- MinIO and IDRA are optional remote services. Configure their authentication, permissions, TLS, and CORS policy in the deployment environment. Do not commit access keys, secret keys, or bearer tokens to a public client bundle.
