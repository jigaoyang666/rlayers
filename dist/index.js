"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPopup = exports.ROverlay = exports.RFeature = exports.RControl = exports.RLayerVectorTile = exports.RLayerCluster = exports.RLayerHeatmap = exports.RLayerStamen = exports.RLayerWMTS = exports.ROSM = exports.RLayerVector = exports.RLayerBaseVector = exports.RLayerTile = exports.RLayer = exports.RMap = exports.RLocationContext = exports.RVectorContext = exports.RLayerContext = exports.RMapContext = exports.ReactLayersBase = exports.VectorSourceEvent = exports.RenderEvent = exports.MapBrowserEvent = exports.MapEvent = void 0;
var ol_1 = require("ol");
Object.defineProperty(exports, "MapEvent", { enumerable: true, get: function () { return ol_1.MapEvent; } });
Object.defineProperty(exports, "MapBrowserEvent", { enumerable: true, get: function () { return ol_1.MapBrowserEvent; } });
var Event_1 = require("ol/render/Event");
Object.defineProperty(exports, "RenderEvent", { enumerable: true, get: function () { return __importDefault(Event_1).default; } });
var Vector_1 = require("ol/source/Vector");
Object.defineProperty(exports, "VectorSourceEvent", { enumerable: true, get: function () { return Vector_1.VectorSourceEvent; } });
var REvent_1 = require("./REvent");
Object.defineProperty(exports, "ReactLayersBase", { enumerable: true, get: function () { return REvent_1.ReactLayersBase; } });
var context_1 = require("./context");
Object.defineProperty(exports, "RMapContext", { enumerable: true, get: function () { return context_1.RMapContext; } });
Object.defineProperty(exports, "RLayerContext", { enumerable: true, get: function () { return context_1.RLayerContext; } });
Object.defineProperty(exports, "RVectorContext", { enumerable: true, get: function () { return context_1.RVectorContext; } });
Object.defineProperty(exports, "RLocationContext", { enumerable: true, get: function () { return context_1.RLocationContext; } });
var RMap_1 = require("./RMap");
Object.defineProperty(exports, "RMap", { enumerable: true, get: function () { return __importDefault(RMap_1).default; } });
var RLayer_1 = require("./layer/RLayer");
Object.defineProperty(exports, "RLayer", { enumerable: true, get: function () { return __importDefault(RLayer_1).default; } });
var RLayerTile_1 = require("./layer/RLayerTile");
Object.defineProperty(exports, "RLayerTile", { enumerable: true, get: function () { return __importDefault(RLayerTile_1).default; } });
var RLayerBaseVector_1 = require("./layer/RLayerBaseVector");
Object.defineProperty(exports, "RLayerBaseVector", { enumerable: true, get: function () { return __importDefault(RLayerBaseVector_1).default; } });
var RLayerVector_1 = require("./layer/RLayerVector");
Object.defineProperty(exports, "RLayerVector", { enumerable: true, get: function () { return __importDefault(RLayerVector_1).default; } });
var ROSM_1 = require("./layer/ROSM");
Object.defineProperty(exports, "ROSM", { enumerable: true, get: function () { return __importDefault(ROSM_1).default; } });
var RLayerWMTS_1 = require("./layer/RLayerWMTS");
Object.defineProperty(exports, "RLayerWMTS", { enumerable: true, get: function () { return __importDefault(RLayerWMTS_1).default; } });
var RLayerStamen_1 = require("./layer/RLayerStamen");
Object.defineProperty(exports, "RLayerStamen", { enumerable: true, get: function () { return __importDefault(RLayerStamen_1).default; } });
var RLayerHeatmap_1 = require("./layer/RLayerHeatmap");
Object.defineProperty(exports, "RLayerHeatmap", { enumerable: true, get: function () { return __importDefault(RLayerHeatmap_1).default; } });
var RLayerCluster_1 = require("./layer/RLayerCluster");
Object.defineProperty(exports, "RLayerCluster", { enumerable: true, get: function () { return __importDefault(RLayerCluster_1).default; } });
var RLayerVectorTile_1 = require("./layer/RLayerVectorTile");
Object.defineProperty(exports, "RLayerVectorTile", { enumerable: true, get: function () { return __importDefault(RLayerVectorTile_1).default; } });
var RScaleLine_1 = __importDefault(require("./control/RScaleLine"));
var RAttribution_1 = __importDefault(require("./control/RAttribution"));
var RZoom_1 = __importDefault(require("./control/RZoom"));
var RRotate_1 = __importDefault(require("./control/RRotate"));
var RCustom_1 = __importDefault(require("./control/RCustom"));
var RLayers_1 = __importDefault(require("./control/RLayers"));
var ROverviewMap_1 = __importDefault(require("./control/ROverviewMap"));
var RFullScreen_1 = __importDefault(require("./control/RFullScreen"));
exports.RControl = {
    RScaleLine: RScaleLine_1.default,
    RAttribution: RAttribution_1.default,
    RZoom: RZoom_1.default,
    RRotate: RRotate_1.default,
    RLayers: RLayers_1.default,
    ROverviewMap: ROverviewMap_1.default,
    RFullScreen: RFullScreen_1.default,
    RCustom: RCustom_1.default
};
var RFeature_1 = require("./RFeature");
Object.defineProperty(exports, "RFeature", { enumerable: true, get: function () { return __importDefault(RFeature_1).default; } });
var ROverlay_1 = require("./ROverlay");
Object.defineProperty(exports, "ROverlay", { enumerable: true, get: function () { return __importDefault(ROverlay_1).default; } });
var RPopup_1 = require("./RPopup");
Object.defineProperty(exports, "RPopup", { enumerable: true, get: function () { return __importDefault(RPopup_1).default; } });
//# sourceMappingURL=index.js.map