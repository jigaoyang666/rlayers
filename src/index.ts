export {MapEvent, MapBrowserEvent} from 'ol';
export {default as RenderEvent} from 'ol/render/Event';
export {VectorSourceEvent} from 'ol/source/Vector';

export {ReactLayersBase} from './REvent';
export {
    RMapContext,
    RLayerContext,
    RVectorContext,
    RVectorContextType,
    RLocationContext,
    RLocationContextType
} from './context';
export {default as RMap, RMapProps} from './RMap';

export {default as RLayer, RLayerProps} from './layer/RLayer';
export {default as RLayerTile, RLayerTileProps} from './layer/RLayerTile';
export {
    default as RLayerBaseVector,
    RLayerBaseVectorProps as RLayerVectorProps
} from './layer/RLayerBaseVector';

export {default as RLayerVector} from './layer/RLayerVector';
export {default as ROSM, ROSMProps} from './layer/ROSM';
export {default as RLayerWMTS, RLayerWMTSProps} from './layer/RLayerWMTS';
export {default as RLayerStamen, RLayerStamenProps} from './layer/RLayerStamen';
export {default as RLayerHeatmap, RLayerHeatmapProps} from './layer/RLayerHeatmap';
export {default as RLayerCluster, RLayerClusterProps} from './layer/RLayerCluster';
export {default as RLayerVectorTile, RLayerVectorTileProps} from './layer/RLayerVectorTile';

import {default as RScaleLine} from './control/RScaleLine';
import {default as RAttribution} from './control/RAttribution';
import {default as RZoom} from './control/RZoom';
import {default as RRotate} from './control/RRotate';
import {default as RCustom} from './control/RCustom';
import {default as RLayers} from './control/RLayers';
import {default as ROverviewMap} from './control/ROverviewMap';
import {default as RFullScreen} from './control/RFullScreen';
export const RControl = {
    RScaleLine,
    RAttribution,
    RZoom,
    RRotate,
    RLayers,
    ROverviewMap,
    RFullScreen,
    RCustom
};

export {default as RFeature, RFeatureProps} from './RFeature';
export {default as ROverlay} from './ROverlay';
export {default as RPopup} from './RPopup';
