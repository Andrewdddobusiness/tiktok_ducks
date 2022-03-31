const gltfPipeline = require("gltf-pipeline");
const fsExtra = require("fs-extra");
const glbToGltf = gltfPipeline.glbToGltf;
const glb = fsExtra.readFileSync("model.glb");
glbToGltf(glb).then(function (results) {
  fsExtra.writeJsonSync("model.gltf", results.gltf);
});


const processGltf = gltfPipeline.processGltf;
const gltf = fsExtra.readJsonSync("model.gltf");
const options = {
  dracoOptions: {
    compressionLevel: 10,
  },
};
processGltf(gltf, options).then(function (results) {
  fsExtra.writeJsonSync("model-draco.gltf", results.gltf);
});