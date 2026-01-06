(function(){
    var script = {
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7AF04260_5BCF_889A_41C2_F0279B469031",
  "this.WebFrame_7C408747_5BFE_88A6_41CE_CA32A78EAD22",
  "this.Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1",
  "this.Button_7DA69836_5BFD_98E6_41CB_891812F48214"
 ],
 "start": "this.init()",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.65,
  "pitch": 0
 },
 "id": "camera_9CBB7CB5_92F2_AE74_41CE_6F332F058123",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.16,
  "pitch": 0
 },
 "id": "camera_809D9C0E_92F2_AE14_41A4_553F48EF73C7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.02,
  "pitch": 0
 },
 "id": "camera_828579DA_92F2_D63C_41E0_BE6962CC1824",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.88,
  "pitch": 0
 },
 "id": "camera_822E1A7E_92F2_AAF4_41DC_1F9CC74EA08A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E189537_4183_A3C4_41CA_8657761AB960_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
 "label": "page (17)",
 "overlays": [
  "this.overlay_5CF3761D_4C34_8A7F_4193_74D270AD6CB1",
  "this.overlay_5EA5F32C_4C37_8A5D_41C1_12715B67F380",
  "this.overlay_00147937_15FF_EADB_41B1_88EAA0BBB322",
  "this.overlay_0023474A_15F1_A54A_4190_F1F2E2A379B1",
  "this.overlay_0D02C32B_15B2_BECA_41B1_A509B1AA9774",
  "this.overlay_02AB02BF_15B1_DFCB_417E_09FDCB16FE8A",
  "this.overlay_0ED0509A_165E_5BD5_41AE_BCA46F9FEE26",
  "this.overlay_0F0A58DD_1652_AB4F_4181_42F6CC02CC60"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -25.36,
   "distance": 1,
   "panorama": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "backwardYaw": 30.64
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 127.68,
   "distance": 1,
   "panorama": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "backwardYaw": 173.35
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.72,
   "distance": 1,
   "panorama": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "backwardYaw": 173.09
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF"
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.68,
  "pitch": 0
 },
 "id": "camera_827A1AB4_92F2_AA74_41C8_78C65C5CEE31",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.76,
  "pitch": 0
 },
 "id": "camera_823E1A65_92F2_AA14_41D0_3CF94F07371B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
 "label": "page (7)",
 "overlays": [
  "this.overlay_558020C0_4187_A2BC_41BC_5A192C6FF034",
  "this.overlay_55DCFCAF_4185_A2C4_41CF_E16FC6C7E1C7",
  "this.overlay_5476E00F_4183_E1C4_41C2_0BF77B86AA78"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -37.89,
   "distance": 1,
   "panorama": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
   "backwardYaw": -123.24
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.29,
   "distance": 1,
   "panorama": "this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0",
   "backwardYaw": 7.12
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
 "label": "page (5)",
 "overlays": [
  "this.overlay_5267FE85_418D_BEC4_41C6_66B8DCE3ACC7",
  "this.overlay_52292DDE_418E_A244_41CA_1C074EE65003"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -151.17,
   "distance": 1,
   "panorama": "this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94",
   "backwardYaw": -4.76
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.14,
   "distance": 1,
   "panorama": "this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0",
   "backwardYaw": -166.44
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.22,
  "pitch": 0
 },
 "id": "camera_8384AB35_92F2_AA74_41BC_4A428619E32D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
 "label": "page (14)",
 "overlays": [
  "this.overlay_59B156AF_4186_AEC4_41C5_B020FB73A7C1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.59,
   "distance": 1,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "backwardYaw": -76.95
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.05,
  "pitch": 0
 },
 "id": "camera_9F488C86_92F2_AE14_41CF_87EB09B307B7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
 "label": "page (13)",
 "overlays": [
  "this.overlay_4332E978_5A5A_BB6A_41D4_CC91E9DCD0CD"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -75.36,
   "distance": 1,
   "panorama": "this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82",
   "backwardYaw": 59.38
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
 "label": "page (21)",
 "overlays": [
  "this.overlay_47BA8D3A_5A4D_98EE_41D2_356A395356E6"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 43.76,
   "distance": 1,
   "panorama": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "backwardYaw": -30.53
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.39,
  "pitch": 0
 },
 "id": "camera_83B89AF5_92F2_ABF4_41E0_D531849E22BB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.24,
  "pitch": 0
 },
 "id": "camera_82D3FA2E_92F2_AA14_41B4_5F1127510916",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35,
  "pitch": 0
 },
 "id": "camera_82484AE9_92F2_AA1C_41E0_2A0898D74161",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -139.49,
  "pitch": 0
 },
 "id": "camera_9F4E6C97_92F2_AE34_41D0_A9DEE80B53D0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.43,
  "pitch": 0
 },
 "id": "camera_9D0CE93B_92F2_D673_41BC_C88C87E0A984",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.34,
  "pitch": 0
 },
 "id": "camera_80BC7BEE_92F2_AA14_41DB_B2BDB62206C5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.52,
  "pitch": 0
 },
 "id": "camera_9D22991F_92F2_D634_41C3_5E671F67AED6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.64,
  "pitch": 0
 },
 "id": "camera_82A9899A_92F2_D63C_41E1_90C860F30C67",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.13,
  "pitch": 0
 },
 "id": "camera_83F4BB48_92F2_AA1C_4198_FF598E71A637",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.59,
  "pitch": 0
 },
 "id": "camera_83E28B55_92F2_AA37_41D1_A2EBEFCD9F2C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.91,
  "pitch": 0
 },
 "id": "camera_9C89ACF9_92F2_AFFC_41D0_929BD4463253",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.86,
  "pitch": 0
 },
 "id": "camera_9D6B295B_92F2_D63C_41A5_B4E4459EE762",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.65,
  "pitch": 0
 },
 "id": "camera_83A66B17_92F2_AA34_41E1_7CDE6AEE41D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.32,
  "pitch": 0
 },
 "id": "camera_9CA97CD1_92F2_AE0C_41D8_340572AEC848",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
 "label": "page (11)",
 "overlays": [
  "this.overlay_56919EA1_4183_FEFC_41CE_83546DF5C8A4",
  "this.overlay_8F4780B0_9DC8_6D89_41D4_C499ED7F7439",
  "this.overlay_00D44840_15F3_EAB5_4183_9F2B215210F8",
  "this.overlay_0183A285_1652_BFBE_41B0_C663B4695DEF"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 176.98,
   "distance": 1,
   "panorama": "this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82",
   "backwardYaw": 96.84
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.87,
   "distance": 1,
   "panorama": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "backwardYaw": 171.85
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -76.95,
   "distance": 1,
   "panorama": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
   "backwardYaw": -77.59
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.93,
  "pitch": 0
 },
 "id": "camera_83119B98_92F2_AA3C_41D3_07EA98628243",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.83,
  "pitch": 0
 },
 "id": "camera_820C0AA0_92F2_AA0D_41E0_5540DE3D6245",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
 "label": "page (23)",
 "overlays": [
  "this.overlay_45462EDB_5A4B_99AE_41A1_070F43BC39A9",
  "this.overlay_44D4A947_5A4A_98A6_41D4_1692D8FFD1A5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -145,
   "distance": 1,
   "panorama": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
   "backwardYaw": 130.26
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.35,
   "distance": 1,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "backwardYaw": 127.68
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.4,
  "pitch": 0
 },
 "id": "camera_826A5ACB_92F2_AA1C_41D4_BCF7178CC936",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
 "label": "page (16)",
 "overlays": [
  "this.overlay_4176659D_4C35_8E7F_41A7_4733A60576ED",
  "this.overlay_5D65B4FD_4C3C_8FBE_41D2_6C8DEBE257FF",
  "this.overlay_5C510466_4C3C_8ECA_41C4_69F52CBFCDC5"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 164.14,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": 158.41
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.24,
   "distance": 1,
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "backwardYaw": -37.89
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.59,
  "pitch": 0
 },
 "id": "camera_9F45ACA5_92F2_AE14_41DF_4CEEDF45D97C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_93067665_9DD7_F48B_41B4_A7DE99890F82",
 "label": "page (10)",
 "overlays": [
  "this.overlay_8ECC61E3_9DC9_AF8F_41E3_5E62B8029AA0",
  "this.overlay_8F4393C7_9DC8_7396_41CC_BFC50FC5404E",
  "this.overlay_016A78C8_15F1_ABB5_4180_D6306BCC169A",
  "this.overlay_017694E5_164E_7B7F_41B0_F9140D1D17AD"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -57.44,
   "distance": 1,
   "panorama": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "backwardYaw": 0.79
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.84,
   "distance": 1,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "backwardYaw": 176.98
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 59.38,
   "distance": 1,
   "panorama": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
   "backwardYaw": -75.36
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.41,
  "pitch": 0
 },
 "id": "camera_9F523C78_92F2_AEFD_41D2_B60BC7F8E020",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.88,
  "pitch": 0
 },
 "id": "camera_83C00B71_92F2_AA0C_41D8_BEEB7E03A221",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_579902EB_5A5E_896F_41AF_4E4466A745DB",
 "label": "page (32)",
 "overlays": [
  "this.overlay_42A8FA83_5A77_F99E_41CB_559AD1BCA7D9"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 66.42,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": 115.21
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.56,
  "pitch": 0
 },
 "id": "camera_83016BA7_92F2_AA14_41C0_CC14C4644ECF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.15,
  "pitch": 0
 },
 "id": "camera_808B0C1A_92F2_AE3D_41D9_DF488CFA241B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.93,
  "pitch": 0
 },
 "id": "camera_8396FB27_92F2_AA14_41E1_2B849DD970E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94",
 "label": "page (4)",
 "overlays": [
  "this.overlay_8D82E75B_9DC9_D4BE_41D5_6A51D398E10D",
  "this.overlay_8CC911D8_9DC8_AFB9_41E2_A0DFC2D5C8FE"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.76,
   "distance": 1,
   "panorama": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "backwardYaw": -151.17
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -119.18,
   "distance": 1,
   "panorama": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "backwardYaw": -16.32
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.65,
  "pitch": 0
 },
 "id": "camera_9C9D1CE9_92F2_AE1F_419E_BAAC2B52F06E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
 "label": "page (9)",
 "overlays": [
  "this.overlay_54E734B7_41FE_E2C4_41BF_713E485045A5",
  "this.overlay_57598D09_4187_63CC_41C9_A27AE7479B53",
  "this.overlay_550FB2C5_4185_6644_41CD_8979432D0B64"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.79,
   "distance": 1,
   "panorama": "this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82",
   "backwardYaw": -57.44
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 147.12,
   "distance": 1,
   "panorama": "this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0",
   "backwardYaw": -8.12
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF"
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
 "label": "page (2)",
 "overlays": [
  "this.overlay_505BC91F_419F_E3C4_41C1_BD3F52FEC397",
  "this.overlay_509658C1_419D_A2BC_41C1_70CD6575F2C8"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 172.07,
   "distance": 1,
   "panorama": "this.panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6",
   "backwardYaw": -1.41
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.35,
   "distance": 1,
   "panorama": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "backwardYaw": -175.35
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0",
 "label": "page (6)",
 "overlays": [
  "this.overlay_8C91CA29_9DF8_BC9B_41E1_1FAB540126BE",
  "this.overlay_8C514C49_9DF8_549B_41D1_B02B71DB597C",
  "this.overlay_033D14CA_15F2_5B4A_41AB_E14024A0956B"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -8.12,
   "distance": 1,
   "panorama": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "backwardYaw": 147.12
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.44,
   "distance": 1,
   "panorama": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "backwardYaw": -0.14
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.12,
   "distance": 1,
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "backwardYaw": -168.29
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.82,
  "pitch": 0
 },
 "id": "camera_83B65B08_92F2_AA1C_41A2_4B9337855127",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.58,
  "pitch": 0
 },
 "id": "camera_9D7D594B_92F2_D61C_41D8_FC705EFA9215",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.74,
  "pitch": 0
 },
 "id": "camera_9CB07CC1_92F2_AE0C_41E0_7512ABE632E9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.11,
  "pitch": 0
 },
 "id": "camera_83D29B64_92F2_AA14_41DA_A6608E437403",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.98,
  "pitch": 0
 },
 "id": "camera_825A6AD8_92F2_AA3C_41BE_BF145366F802",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -120.62,
  "pitch": 0
 },
 "id": "camera_82B9798A_92F2_D61C_41DC_EC4A1C911DDF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_57990342_5A5E_889E_41C7_E36DDA767722_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.36,
  "pitch": 0
 },
 "id": "camera_9CA26CDE_92F2_AE34_41DE_2C0220E79B10",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.3,
  "pitch": 0
 },
 "id": "camera_9D5B796C_92F2_D614_41C9_59C814095568",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.57,
  "pitch": 0
 },
 "id": "camera_9D11E92F_92F2_D614_41E0_6C5576421335",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
 "label": "page (30)",
 "overlays": [
  "this.overlay_4CAC0AAB_5A75_F9EE_41D2_444B0CA7208D"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -97.43,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": 40.51
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.01,
  "pitch": 0
 },
 "id": "camera_9D373911_92F2_D60C_41D2_6816DF7B980A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.64,
  "pitch": 0
 },
 "id": "camera_82F5F9F5_92F2_A9F4_41D5_12DF479B8A8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
 "label": "page (8)",
 "overlays": [
  "this.overlay_049B5B84_15DE_ADBE_41A2_8263E80E2750",
  "this.overlay_055702A4_15DE_5FFE_41AC_FB2BC87B7880",
  "this.overlay_0508CAA0_15D2_EFF6_41A1_3A3DA0897998",
  "this.overlay_05058BD1_15D2_AD57_41B0_E63A8B4A1CF4",
  "this.overlay_0550C440_15D6_BAB6_4182_E21E3A7C68BC",
  "this.overlay_0501C036_15D6_7ADD_4193_D37B4AF0CBBD",
  "this.overlay_0508E831_15D6_6AD6_41A8_363A19E39ED5",
  "this.overlay_02652678_15D1_A755_41AC_212204AE42B5",
  "this.overlay_025B52DF_15D2_7F4A_41AD_71DA70A5810A",
  "this.overlay_0D9AA651_15CE_E757_41B2_FD2B50A648EF",
  "this.overlay_0DB3EBA3_15B1_EDFA_41B5_29E19D217794",
  "this.overlay_0D6E1B6A_15B6_6D75_41A7_4ABED5B80C1C",
  "this.overlay_025F8758_15B2_A556_41A3_016386CCB4C0",
  "this.overlay_0276C56B_15B1_E54B_41B3_9EB149DAD57D",
  "this.overlay_025E3C28_15B1_EAF5_41B2_1EDE813B0438",
  "this.overlay_02075B08_15B3_EEB5_41A3_BE5F8043675A",
  "this.overlay_0E8579B3_1652_6DDA_41A9_AB3D20958CF6"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -112.66,
   "distance": 1,
   "panorama": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722",
   "backwardYaw": -67.99
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -80.76,
   "distance": 1,
   "panorama": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
   "backwardYaw": -50.48
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 40.51,
   "distance": 1,
   "panorama": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
   "backwardYaw": -97.43
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -150.07,
   "distance": 1,
   "panorama": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
   "backwardYaw": -53.57
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 115.21,
   "distance": 1,
   "panorama": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB",
   "backwardYaw": 66.42
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.41,
   "distance": 1,
   "panorama": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
   "backwardYaw": 164.14
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -136.02,
   "distance": 1,
   "panorama": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
   "backwardYaw": -78.7
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 61.53,
   "distance": 1,
   "panorama": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
   "backwardYaw": -88.85
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.28,
  "pitch": 0
 },
 "id": "camera_835C7BD1_92F2_AA0C_41B5_EE6DF1EF8B65",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6",
 "label": "page (1)",
 "overlays": [
  "this.overlay_92BC64DE_9DC8_D5B9_41BE_207BE30B7A17"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.41,
   "distance": 1,
   "panorama": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "backwardYaw": 172.07
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E180809_4185_61CC_419C_73BF32B85618_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.47,
  "pitch": 0
 },
 "id": "camera_836EDBC1_92F2_AA0C_41D1_7BAC8B2BB41C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
 "label": "page (27)",
 "overlays": [
  "this.overlay_4F333299_5A7A_89AA_41D3_5F8B03AB3308"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -53.57,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": -150.07
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.88,
  "pitch": 0
 },
 "id": "camera_837F2BB3_92F2_AA0C_41BA_9AA085F0E864",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E",
 "label": "page (22)",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.24,
  "pitch": 0
 },
 "id": "camera_82E3DA15_92F2_AA34_41D3_3E7413C72CE6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.21,
  "pitch": 0
 },
 "id": "camera_829789B5_92F2_D677_41B0_85112603AFCE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
 "label": "page (24)",
 "overlays": [
  "this.overlay_449DD0B9_5A4A_89EA_41D5_879DF95FE524"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 130.26,
   "distance": 1,
   "panorama": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "backwardYaw": -145
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE",
 "label": "page (26)",
 "overlays": [
  "this.overlay_4FF90D5B_5A7B_B8AE_41CB_431E83229343"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE"
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E187D38_4183_63CC_41BB_9B528DA47595_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.86,
  "pitch": 0
 },
 "id": "camera_83303B7D_92F2_AAF4_41D5_EF7E24594131",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_camera",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB"
  }
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
 "label": "page (12)",
 "overlays": [
  "this.overlay_59E0E178_4182_E24C_41A5_DBB3FFA2A73E",
  "this.overlay_00A3A78D_15F2_65CF_418F_B81D73FF511B",
  "this.overlay_0E623B94_1656_6DDE_4182_D8415F13AE67"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -95.61,
   "distance": 1,
   "panorama": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
   "backwardYaw": 83.78
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.85,
   "distance": 1,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "backwardYaw": 0.87
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E180809_4185_61CC_419C_73BF32B85618",
 "label": "page (3)",
 "overlays": [
  "this.overlay_50736269_4183_A64C_41CA_76014A16C9AF",
  "this.overlay_5367957F_4186_E244_41C1_5B4953B7519A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -16.32,
   "distance": 1,
   "panorama": "this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94",
   "backwardYaw": -119.18
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -175.35,
   "distance": 1,
   "panorama": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "backwardYaw": -6.35
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
 "label": "page (31)",
 "overlays": [
  "this.overlay_4C93B68C_5A76_89AA_41A7_3457BB85B76F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -88.85,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": 61.53
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E189537_4183_A3C4_41CA_8657761AB960",
 "label": "page (20)",
 "overlays": [
  "this.overlay_46DFDD5D_5A4F_98AA_41BE_66C92DB34E1F",
  "this.overlay_47F21CF3_5A4E_B97E_41CF_55744777355F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 30.64,
   "distance": 1,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "backwardYaw": -25.36
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -30.53,
   "distance": 1,
   "panorama": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
   "backwardYaw": 43.76
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.71,
  "pitch": 0
 },
 "id": "camera_83205B8C_92F2_AA14_41C8_2F3E1DCF22EA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.24,
  "pitch": 0
 },
 "id": "camera_82A779A7_92F2_D614_41DA_04A22AB20608",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.15,
  "pitch": 0
 },
 "id": "camera_9D49597C_92F2_D6F4_41C7_5BC56EB46B92",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
 "label": "page (15)",
 "overlays": [
  "this.overlay_59FCA7E7_4187_AE44_41B0_14FB120EAAFA"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 83.78,
   "distance": 1,
   "panorama": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "backwardYaw": -95.61
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
 "label": "page (25)",
 "overlays": [
  "this.overlay_4F30FA06_5A7B_78A6_41D4_1D7EAC82205C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -50.48,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": -80.76
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.47,
  "pitch": 0
 },
 "id": "camera_80AD8BFD_92F2_A9F4_41D9_EB3A8C13B9F6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.93,
  "pitch": 0
 },
 "id": "camera_834C9BDE_92F2_AA34_41D3_06F6F675705E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -64.79,
  "pitch": 0
 },
 "id": "camera_821C0A90_92F2_AA0C_41CD_DA14D4C7C16D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.56,
  "pitch": 0
 },
 "id": "camera_82C07A46_92F2_AA14_41B2_3FF9D9C02A9A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_57990342_5A5E_889E_41C7_E36DDA767722",
 "label": "page (28)",
 "overlays": [
  "this.overlay_4F6A7537_5A7A_88E6_41BF_E382075E396F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -67.99,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": -112.66
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
 "label": "page (29)",
 "overlays": [
  "this.overlay_4F64CD26_5A7A_98E6_41A9_E8F3132CC4FB"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -78.7,
   "distance": 1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "backwardYaw": -136.02
  }
 ],
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
 "label": "page (19)",
 "overlays": [
  "this.overlay_466C6068_5A4D_896A_41D1_76FDD91C0A19"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 150.07,
   "distance": 1,
   "panorama": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "backwardYaw": -75.6
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "id": "panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
 "label": "page (18)",
 "overlays": [
  "this.overlay_418E1A18_5A4B_98AA_41C7_E6F4D26E18D4",
  "this.overlay_408947E1_5A4A_979A_41C4_9B2FE94D7F4E",
  "this.overlay_0F102031_1652_DAD6_41AE_22E4E69B9337"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 173.09,
   "distance": 1,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "backwardYaw": -0.72
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -75.6,
   "distance": 1,
   "panorama": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
   "backwardYaw": 150.07
  }
 ],
 "hfovMax": 130
},
{
 "toolTipFontColor": "#606060",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBorderColor": "#000000",
 "minWidth": 100,
 "height": "100%",
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBorderColor": "#767676",
 "progressRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "progressBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "propagateClick": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "progressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10
},
{
 "backgroundImageUrl": "skin/Container_7AF04260_5BCF_889A_41C2_F0279B469031.png",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3",
  "this.Container_7AF0D260_5BCF_889A_41D1_E076440204F0"
 ],
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "id": "Container_7AF04260_5BCF_889A_41C2_F0279B469031",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.64,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "bottom": 0,
 "height": 69.15,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "--MENU"
 },
 "scrollBarColor": "#000000",
 "horizontalAlign": "left"
},
{
 "propagateClick": false,
 "id": "WebFrame_7C408747_5BFE_88A6_41CE_CA32A78EAD22",
 "width": "100%",
 "right": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "minWidth": 1,
 "height": "8.576%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "class": "WebFrame",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame69720"
 },
 "backgroundColorDirection": "vertical"
},
{
 "maxHeight": 225,
 "maxWidth": 225,
 "propagateClick": false,
 "id": "Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1",
 "left": "0.56%",
 "width": "5.567%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "skin/Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1.png",
 "minHeight": 1,
 "top": "0%",
 "height": "7.41%",
 "borderRadius": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image69923"
 },
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "propagateClick": false,
 "id": "Button_7DA69836_5BFD_98E6_41CB_891812F48214",
 "left": "6.79%",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 0,
 "width": 280.4,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "rollOverShadow": false,
 "borderColor": "#000000",
 "layout": "horizontal",
 "iconHeight": 0,
 "top": "1.37%",
 "height": 40,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "21px",
 "mode": "push",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "label": "SMK ASSALAM SAMARANG",
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "fontColor": "#000000",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95, this.camera_9C89ACF9_92F2_AFFC_41D0_929BD4463253); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.72,
   "hfov": 7.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0D4A9C_9DD8_BDBA_41D7_D7302116223F",
   "pitch": -4.89,
   "yaw": -0.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.85,
   "distance": 100
  }
 ],
 "id": "overlay_5CF3761D_4C34_8A7F_4193_74D270AD6CB1",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.85,
   "hfov": 11.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0EBA9C_9DD8_BDBA_41DD_4DC94BAE8E31",
   "pitch": -0.53,
   "yaw": -174.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.94,
   "distance": 100
  }
 ],
 "id": "overlay_5EA5F32C_4C37_8A5D_41C1_12715B67F380",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595, this.camera_9C9D1CE9_92F2_AE1F_419E_BAAC2B52F06E); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.68,
   "hfov": 6.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87,
   "hfov": 6.24
  }
 ],
 "id": "overlay_00147937_15FF_EADB_41B1_88EAA0BBB322",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E189537_4183_A3C4_41CA_8657761AB960, this.camera_9CA26CDE_92F2_AE34_41DE_2C0220E79B10); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.36,
   "hfov": 6.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.8
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -25.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.8,
   "hfov": 6.24
  }
 ],
 "id": "overlay_0023474A_15F1_A54A_4190_F1F2E2A379B1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.62,
   "hfov": 9.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.99
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 221,
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.99,
   "yaw": -106.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.14,
   "distance": 50
  }
 ],
 "id": "overlay_0D02C32B_15B2_BECA_41B1_A509B1AA9774",
 "data": {
  "label": "Kelas 11 OTKP"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.09,
   "hfov": 10.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 261,
      "height": 154
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2,
   "yaw": -96.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.8,
   "distance": 50
  }
 ],
 "id": "overlay_02AB02BF_15B1_DFCB_417E_09FDCB16FE8A",
 "data": {
  "label": "Kelas 12 TBSM "
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.76,
   "hfov": 27.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.27
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 676,
      "height": 123
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.27,
   "yaw": 129.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.8,
   "distance": 50
  }
 ],
 "id": "overlay_0ED0509A_165E_5BD5_41AE_BCA46F9FEE26",
 "data": {
  "label": "Lab Komputer dan TU"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.37,
   "hfov": 17.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 434,
      "height": 110
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46,
   "yaw": -22.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.83,
   "distance": 50
  }
 ],
 "id": "overlay_0F0A58DD_1652_AB4F_4181_42F6CC02CC60",
 "data": {
  "label": "Ruang Guru"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.39,
   "hfov": 13.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 34.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 325,
      "height": 276
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87,
   "hfov": 13.38
  }
 ],
 "id": "overlay_558020C0_4187_A2BC_41BC_5A192C6FF034",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0, this.camera_822E1A7E_92F2_AAF4_41DC_1F9CC74EA08A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.29,
   "hfov": 9.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B04DA91_9DD8_BD8A_41D4_74324D9654F1",
   "pitch": -8.86,
   "yaw": -168.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.47,
   "distance": 100
  }
 ],
 "id": "overlay_55DCFCAF_4185_A2C4_41CF_E16FC6C7E1C7",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66, this.camera_823E1A65_92F2_AA14_41D0_3CF94F07371B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.89,
   "hfov": 9.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B042A91_9DD8_BD8A_41DE_0F39696BEDCD",
   "pitch": -3.37,
   "yaw": -37.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.45,
   "distance": 50
  }
 ],
 "id": "overlay_5476E00F_4183_E1C4_41C2_0BF77B86AA78",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0, this.camera_82C07A46_92F2_AA14_41B2_3FF9D9C02A9A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.14,
   "hfov": 16.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B021A90_9DD8_BD8A_41CF_ECDDA85033CD",
   "pitch": -15.13,
   "yaw": -0.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.56,
   "distance": 100
  }
 ],
 "id": "overlay_5267FE85_418D_BEC4_41C6_66B8DCE3ACC7",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94, this.camera_82D3FA2E_92F2_AA14_41B4_5F1127510916); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.17,
   "hfov": 20.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B027A90_9DD8_BD8A_41C4_4E9927A220F5",
   "pitch": -11.93,
   "yaw": -151.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.55,
   "distance": 50
  }
 ],
 "id": "overlay_52292DDE_418E_A244_41CA_1C074EE65003",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_9F488C86_92F2_AE14_41CF_87EB09B307B7); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.59,
   "hfov": 12.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0B6A9B_9DD8_BDBE_41AC_4B505A4C0456",
   "pitch": -5.68,
   "yaw": -77.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.98,
   "distance": 100
  }
 ],
 "id": "overlay_59B156AF_4186_AEC4_41C5_B020FB73A7C1",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82, this.camera_82B9798A_92F2_D61C_41DC_EC4A1C911DDF); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.36,
   "hfov": 12.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.64
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0B2A9B_9DD8_BDBE_41B1_E1734F492E25",
   "pitch": -5.64,
   "yaw": -75.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.17,
   "distance": 100
  }
 ],
 "id": "overlay_4332E978_5A5A_BB6A_41D4_CC91E9DCD0CD",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E189537_4183_A3C4_41CA_8657761AB960, this.camera_80AD8BFD_92F2_A9F4_41D9_EB3A8C13B9F6); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.76,
   "hfov": 15.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0F3AA3_9DD8_BD8E_41D2_5F953ECEB808",
   "pitch": -5.68,
   "yaw": 43.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.98,
   "distance": 50
  }
 ],
 "id": "overlay_47BA8D3A_5A4D_98EE_41D2_356A395356E6",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA, this.camera_808B0C1A_92F2_AE3D_41D9_DF488CFA241B); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.87,
   "hfov": 8.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B097A9A_9DD8_BDBE_41DE_D435584E0CA2",
   "pitch": -10.56,
   "yaw": 0.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.87,
   "distance": 100
  }
 ],
 "id": "overlay_56919EA1_4183_FEFC_41CE_83546DF5C8A4",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82, this.camera_809D9C0E_92F2_AE14_41A4_553F48EF73C7); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.98,
   "hfov": 8.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.23
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_846890AB_9E38_AD9E_41D0_8F442A7EB813",
   "pitch": -17.23,
   "yaw": 176.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.86,
   "distance": 100
  }
 ],
 "id": "overlay_8F4780B0_9DC8_6D89_41D4_C499ED7F7439",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1, this.camera_9F523C78_92F2_AEFD_41D2_B60BC7F8E020); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.95,
   "hfov": 23.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 592,
      "height": 482
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.34,
   "hfov": 23.27
  }
 ],
 "id": "overlay_00D44840_15F3_EAB5_4183_9F2B215210F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.5,
   "hfov": 43.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.23
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 1097,
      "height": 1097
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.23,
   "yaw": -53.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.59,
   "distance": 50
  }
 ],
 "id": "overlay_0183A285_1652_BFBE_41B0_C663B4695DEF",
 "data": {
  "label": "Kelas 12 OTKP"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_9CA97CD1_92F2_AE0C_41D8_340572AEC848); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.35,
   "hfov": 12.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF0AAA4_9DD8_BD8A_41D8_BF7BBB6FF527",
   "pitch": -10.93,
   "yaw": 173.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.74,
   "distance": 100
  }
 ],
 "id": "overlay_45462EDB_5A4B_99AE_41A1_070F43BC39A9",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4, this.camera_9CB07CC1_92F2_AE0C_41E0_7512ABE632E9); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145,
   "hfov": 10.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF04AA4_9DD8_BD8A_41C8_AB68A6D48D2E",
   "pitch": -10.28,
   "yaw": -145,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.13,
   "distance": 50
  }
 ],
 "id": "overlay_44D4A947_5A4A_98A6_41D4_1692D8FFD1A5",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.4,
   "hfov": 13.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0C3A9B_9DD8_BDBE_41CD_C0BECFBAFF3F",
   "pitch": -6.64,
   "yaw": -2.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.33,
   "distance": 100
  }
 ],
 "id": "overlay_4176659D_4C35_8E7F_41A7_4733A60576ED",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF, this.camera_83D29B64_92F2_AA14_41DA_A6608E437403); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.24,
   "hfov": 10.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0D8A9C_9DD8_BDBA_41CE_34C89DA624C2",
   "pitch": -7.53,
   "yaw": -123.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.21,
   "distance": 50
  }
 ],
 "id": "overlay_5D65B4FD_4C3C_8FBE_41D2_6C8DEBE257FF",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_83E28B55_92F2_AA37_41D1_A2EBEFCD9F2C); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.14,
   "hfov": 16.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0DDA9C_9DD8_BDBA_41A5_2B20C333AB54",
   "pitch": -4.94,
   "yaw": 164.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.42,
   "distance": 50
  }
 ],
 "id": "overlay_5C510466_4C3C_8ECA_41C4_69F52CBFCDC5",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E, this.camera_829789B5_92F2_D677_41B0_85112603AFCE); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.44,
   "hfov": 10.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B083A99_9DD8_BDBA_41DA_E5B1A5FCBFE4",
   "pitch": -52.84,
   "yaw": -57.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.6,
   "distance": 50
  }
 ],
 "id": "overlay_8ECC61E3_9DC9_AF8F_41E3_5E62B8029AA0",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_828579DA_92F2_D63C_41E0_BE6962CC1824); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.84,
   "hfov": 17.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_84033E2C_9DC8_749A_41E3_7C6F32B13497",
   "pitch": -17.95,
   "yaw": 96.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "distance": 100
  }
 ],
 "id": "overlay_8F4393C7_9DC8_7396_41CC_BFC50FC5404E",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2, this.camera_82F5F9F5_92F2_A9F4_41D5_12DF479B8A8E); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.38,
   "hfov": 13.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 329,
      "height": 329
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.56,
   "hfov": 13.58
  }
 ],
 "id": "overlay_016A78C8_15F1_ABB5_4180_D6306BCC169A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.13,
   "hfov": 16.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.65
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 401,
      "height": 131
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.65,
   "yaw": 63.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.51,
   "distance": 50
  }
 ],
 "id": "overlay_017694E5_164E_7B7F_41B0_F9140D1D17AD",
 "data": {
  "label": "Kelas 12 TKRO"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_821C0A90_92F2_AA0C_41CD_DA14D4C7C16D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.42,
   "hfov": 13.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF37AA6_9DD8_BD96_41D5_74FFBB97A93A",
   "pitch": -6.29,
   "yaw": 66.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.99,
   "distance": 50
  }
 ],
 "id": "overlay_42A8FA83_5A77_F99E_41CB_559AD1BCA7D9",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE, this.camera_820C0AA0_92F2_AA0D_41E0_5540DE3D6245); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.76,
   "hfov": 7.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B028A90_9DD8_BD8A_4164_E9D68B42159C",
   "pitch": -2.78,
   "yaw": -4.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.13,
   "distance": 100
  }
 ],
 "id": "overlay_8D82E75B_9DC9_D4BE_41D5_6A51D398E10D",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E180809_4185_61CC_419C_73BF32B85618, this.camera_827A1AB4_92F2_AA74_41C8_78C65C5CEE31); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.18,
   "hfov": 16.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B02DA90_9DD8_BD8A_41E2_47BAF07BBB39",
   "pitch": -5.09,
   "yaw": -119.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.31,
   "distance": 100
  }
 ],
 "id": "overlay_8CC911D8_9DC8_AFB9_41E2_A0DFC2D5C8FE",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_93067665_9DD7_F48B_41B4_A7DE99890F82, this.camera_83016BA7_92F2_AA14_41C0_CC14C4644ECF); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.79,
   "hfov": 15.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B07EA99_9DD8_BDBA_41C6_712591A1239F",
   "pitch": 21.84,
   "yaw": 0.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.93,
   "distance": 100
  }
 ],
 "id": "overlay_54E734B7_41FE_E2C4_41BF_713E485045A5",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0, this.camera_837F2BB3_92F2_AA0C_41BA_9AA085F0E864); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.12,
   "hfov": 25.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.52
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B075A99_9DD8_BDBA_41D8_3E1FF09AF4FE",
   "pitch": -25.52,
   "yaw": 147.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.4,
   "distance": 50
  }
 ],
 "id": "overlay_57598D09_4187_63CC_41C9_A27AE7479B53",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.12,
   "hfov": 17.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.67
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0C99C0B2_15F6_7BD5_41B1_D28BD729A34D",
   "pitch": -15.67,
   "yaw": 52.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.84,
   "distance": 50
  }
 ],
 "id": "overlay_550FB2C5_4185_6644_41CD_8979432D0B64",
 "data": {
  "label": "Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E180809_4185_61CC_419C_73BF32B85618, this.camera_9CBB7CB5_92F2_AE74_41CE_6F332F058123); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.35,
   "hfov": 12.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B007A8F_9DD8_BD96_41DB_0D1BF9CF91A9",
   "pitch": -4.72,
   "yaw": -6.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.72,
   "distance": 100
  }
 ],
 "id": "overlay_505BC91F_419F_E3C4_41C1_BD3F52FEC397",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6, this.camera_9F45ACA5_92F2_AE14_41DF_4CEEDF45D97C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.07,
   "hfov": 9.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B01BA90_9DD8_BD8A_41DA_9D7C5CB18F42",
   "pitch": -3.96,
   "yaw": 172.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.79,
   "distance": 100
  }
 ],
 "id": "overlay_509658C1_419D_A2BC_41C1_70CD6575F2C8",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF, this.camera_83205B8C_92F2_AA14_41C8_2F3E1DCF22EA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.12,
   "hfov": 4.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B03FA91_9DD8_BD8A_41C4_F8D784DC2099",
   "pitch": -5.69,
   "yaw": 7.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.22,
   "distance": 100
  }
 ],
 "id": "overlay_8C91CA29_9DF8_BC9B_41E1_1FAB540126BE",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE, this.camera_83303B7D_92F2_AAF4_41D5_EF7E24594131); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.44,
   "hfov": 4.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.65
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B035A91_9DD8_BD8A_41A2_3436E4D9E812",
   "pitch": -13.65,
   "yaw": -166.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.42,
   "distance": 100
  }
 ],
 "id": "overlay_8C514C49_9DF8_549B_41D1_B02B71DB597C",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E, this.camera_83C00B71_92F2_AA0C_41D8_BEEB7E03A221); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.12,
   "hfov": 3.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0CB09EC4_164E_A7BD_41A6_CEA8E809F352",
   "pitch": 1.64,
   "yaw": -8.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.08,
   "distance": 100
  }
 ],
 "id": "overlay_033D14CA_15F2_5B4A_41AB_E14024A0956B",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_9F4E6C97_92F2_AE34_41D0_A9DEE80B53D0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.43,
   "hfov": 16.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF3DAA6_9DD8_BD96_41D6_0942C39F6ABE",
   "pitch": -3.96,
   "yaw": -97.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.31,
   "distance": 100
  }
 ],
 "id": "overlay_4CAC0AAB_5A75_F9EE_41D2_444B0CA7208D",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142, this.camera_9D11E92F_92F2_D614_41E0_6C5576421335); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.51,
   "hfov": 4.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.54,
   "hfov": 4.77
  }
 ],
 "id": "overlay_049B5B84_15DE_ADBE_41A2_8263E80E2750",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE, this.camera_9D49597C_92F2_D6F4_41C7_5BC56EB46B92); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.53,
   "hfov": 4.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 61.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 112,
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.29,
   "hfov": 4.67
  }
 ],
 "id": "overlay_055702A4_15DE_5FFE_41AC_FB2BC87B7880",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB, this.camera_9D7D594B_92F2_D61C_41D8_FC705EFA9215); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.21,
   "hfov": 3.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.72,
   "hfov": 3.88
  }
 ],
 "id": "overlay_0508CAA0_15D2_EFF6_41A1_3A3DA0897998",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B, this.camera_9D22991F_92F2_D634_41C3_5E671F67AED6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.76,
   "hfov": 4.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 107,
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.49,
   "hfov": 4.45
  }
 ],
 "id": "overlay_05058BD1_15D2_AD57_41B0_E63A8B4A1CF4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_57990342_5A5E_889E_41C7_E36DDA767722, this.camera_9D373911_92F2_D60C_41D2_6816DF7B980A); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.66,
   "hfov": 4.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.46
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.66,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.46,
   "hfov": 4.13
  }
 ],
 "id": "overlay_0550C440_15D6_BAB6_4182_E21E3A7C68BC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4, this.camera_9D5B796C_92F2_D614_41C9_59C814095568); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.02,
   "hfov": 3.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -136.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 79,
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.41,
   "hfov": 3.29
  }
 ],
 "id": "overlay_0501C036_15D6_7ADD_4193_D37B4AF0CBBD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66, this.camera_9D0CE93B_92F2_D673_41BC_C88C87E0A984); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.07,
   "hfov": 3.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.07,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 78,
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.94,
   "hfov": 3.25
  }
 ],
 "id": "overlay_0508E831_15D6_6AD6_41A8_363A19E39ED5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.98,
   "hfov": 12.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_17_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.07
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 293,
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.07,
   "yaw": -79.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.02,
   "distance": 50
  }
 ],
 "id": "overlay_02652678_15D1_A755_41AC_212204AE42B5",
 "data": {
  "label": "Lab TBSM"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.21,
   "hfov": 13.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_18_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.3
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 327,
      "height": 117
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.3,
   "yaw": -149.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.44,
   "distance": 50
  }
 ],
 "id": "overlay_025B52DF_15D2_7F4A_41AD_71DA70A5810A",
 "data": {
  "label": "Kelas 10 RPL"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.97,
   "hfov": 14.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_19_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 58,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.48
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 364,
      "height": 99
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.48,
   "yaw": -132.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.97,
   "distance": 50
  }
 ],
 "id": "overlay_0D9AA651_15CE_E757_41B2_FD2B50A648EF",
 "data": {
  "label": "Kelas 10 OTKP"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.4,
   "hfov": 18.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_20_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 459,
      "height": 251
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5,
   "yaw": -108.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.96,
   "distance": 50
  }
 ],
 "id": "overlay_0DB3EBA3_15B1_EDFA_41B5_29E19D217794",
 "data": {
  "label": "Kelas 10 TBSM"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.97,
   "hfov": 15.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_21_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 65,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.68
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_21_0.png",
      "class": "ImageResourceLevel",
      "width": 377,
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.68,
   "yaw": -49.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.54,
   "distance": 50
  }
 ],
 "id": "overlay_0D6E1B6A_15B6_6D75_41A7_4ABED5B80C1C",
 "data": {
  "label": "Kelas 10 TKRO"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.1,
   "hfov": 14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_22_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.83
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_22_0.png",
      "class": "ImageResourceLevel",
      "width": 362,
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.83,
   "yaw": 43.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.93,
   "distance": 50
  }
 ],
 "id": "overlay_025F8758_15B2_A556_41A3_016386CCB4C0",
 "data": {
  "label": "kelas 11 TBSM"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.02,
   "hfov": 15.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_23_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.04
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_23_0.png",
      "class": "ImageResourceLevel",
      "width": 377,
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.04,
   "yaw": 64.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.51,
   "distance": 50
  }
 ],
 "id": "overlay_0276C56B_15B1_E54B_41B3_9EB149DAD57D",
 "data": {
  "label": "Kelas 11 TKRO"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.46,
   "hfov": 13.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_24_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 46,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.69
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_24_0.png",
      "class": "ImageResourceLevel",
      "width": 318,
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.69,
   "yaw": 114.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.15,
   "distance": 50
  }
 ],
 "id": "overlay_025E3C28_15B1_EAF5_41B2_1EDE813B0438",
 "data": {
  "label": "Kelas 11 RPL"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.99,
   "hfov": 9.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_25_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.96
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_25_0.png",
      "class": "ImageResourceLevel",
      "width": 235,
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.96,
   "yaw": 125.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.72,
   "distance": 50
  }
 ],
 "id": "overlay_02075B08_15B3_EEB5_41A3_BE5F8043675A",
 "data": {
  "label": "Gudang"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66, this.camera_9D6B295B_92F2_D63C_41A5_B4E4459EE762); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.41,
   "hfov": 11.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0CFCEFDD_1651_E54E_41B1_78E02D871D74",
   "pitch": -8.68,
   "yaw": 158.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.75,
   "distance": 100
  }
 ],
 "id": "overlay_0E8579B3_1652_6DDA_41A9_AB3D20958CF6",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649, this.camera_8396FB27_92F2_AA14_41E1_2B849DD970E0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.41,
   "hfov": 11.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0C9BE4AC_164E_FBCD_41A0_A57A4A2E4361",
   "pitch": -2.85,
   "yaw": -1.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_92BC64DE_9DC8_D5B9_41BE_207BE30B7A17",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_83119B98_92F2_AA3C_41D3_07EA98628243); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.57,
   "hfov": 13.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF2BAA5_9DD8_BD8A_41C9_10DFC11F03BE",
   "pitch": -1.42,
   "yaw": -53.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.3,
   "distance": 50
  }
 ],
 "id": "overlay_4F333299_5A7A_89AA_41D3_5F8B03AB3308",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595, this.camera_82484AE9_92F2_AA1C_41E0_2A0898D74161); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.26,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.24
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF1AAA4_9DD8_BD8B_41D6_7C67404C8C16",
   "pitch": -5.24,
   "yaw": 130.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.25,
   "distance": 50
  }
 ],
 "id": "overlay_449DD0B9_5A4A_89EA_41D5_879DF95FE524",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.57,
   "hfov": 13.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF17AA5_9DD8_BD8A_41D0_42B85C242FBA",
   "pitch": -1.42,
   "yaw": -53.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.3,
   "distance": 50
  }
 ],
 "id": "overlay_4FF90D5B_5A7B_B8AE_41CB_431E83229343",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_83F4BB48_92F2_AA1C_4198_FF598E71A637); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.85,
   "hfov": 18.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0A6A9B_9DD8_BDBE_41E0_4E298AA5577F",
   "pitch": -12.66,
   "yaw": 171.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.15,
   "distance": 100
  }
 ],
 "id": "overlay_59E0E178_4182_E24C_41A5_DBB3FFA2A73E",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94, this.camera_8384AB35_92F2_AA74_41BC_4A428619E32D); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.61,
   "hfov": 16.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 408,
      "height": 370
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.58,
   "hfov": 16.43
  }
 ],
 "id": "overlay_00A3A78D_15F2_65CF_418F_B81D73FF511B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.28,
   "hfov": 45.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 43,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1101,
      "height": 408
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66,
   "yaw": -94.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 45.54,
   "distance": 50
  }
 ],
 "id": "overlay_0E623B94_1656_6DDE_4182_D8415F13AE67",
 "data": {
  "label": "Kelas 12 RPL"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94, this.camera_83B65B08_92F2_AA1C_41A2_4B9337855127); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.32,
   "hfov": 9.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B01FA90_9DD8_BD8A_41E3_BC0E773B87B3",
   "pitch": -0.18,
   "yaw": -16.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.47,
   "distance": 50
  }
 ],
 "id": "overlay_50736269_4183_A64C_41CA_76014A16C9AF",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649, this.camera_83A66B17_92F2_AA34_41E1_7CDE6AEE41D8); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.35,
   "hfov": 12.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B014A90_9DD8_BD8A_41B0_E0DB72F3EE41",
   "pitch": -2.03,
   "yaw": -175.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.79,
   "distance": 100
  }
 ],
 "id": "overlay_5367957F_4186_E244_41C1_5B4953B7519A",
 "data": {
  "label": "Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_836EDBC1_92F2_AA0C_41D1_7BAC8B2BB41C); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.85,
   "hfov": 20.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF31AA6_9DD8_BD96_41DB_624A750CF11D",
   "pitch": -2.59,
   "yaw": -88.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.44,
   "distance": 100
  }
 ],
 "id": "overlay_4C93B68C_5A76_89AA_41A7_3457BB85B76F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_82A9899A_92F2_D63C_41E1_90C860F30C67); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.64,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0E6A9D_9DD8_BDBA_41DC_028CD6B1DE11",
   "pitch": -5.27,
   "yaw": 30.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.25,
   "distance": 50
  }
 ],
 "id": "overlay_46DFDD5D_5A4F_98AA_41BE_66C92DB34E1F",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF, this.camera_82A779A7_92F2_D614_41DA_04A22AB20608); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.53,
   "hfov": 8.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0FDA9E_9DD8_BDB3_41E1_FB87BEEC5B47",
   "pitch": -5.07,
   "yaw": -30.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 50
  }
 ],
 "id": "overlay_47F21CF3_5A4E_B97E_41CF_55744777355F",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA, this.camera_83B89AF5_92F2_ABF4_41E0_D531849E22BB); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.78,
   "hfov": 11.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0CCA9B_9DD8_BDBE_41E1_72A26F50E753",
   "pitch": -8.02,
   "yaw": 83.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.77,
   "distance": 100
  }
 ],
 "id": "overlay_59FCA7E7_4187_AE44_41B0_14FB120EAAFA",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_82E3DA15_92F2_AA34_41D3_3E7413C72CE6); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.48,
   "hfov": 11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.03
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF10AA5_9DD8_BD8A_41BE_6BF156C84942",
   "pitch": 0.03,
   "yaw": -50.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11,
   "distance": 50
  }
 ],
 "id": "overlay_4F30FA06_5A7B_78A6_41D4_1D7EAC82205C",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_80BC7BEE_92F2_AA14_41DB_B2BDB62206C5); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.99,
   "hfov": 13.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF21AA5_9DD8_BD8A_41B7_1636FFF0266B",
   "pitch": -1.42,
   "yaw": -67.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.3,
   "distance": 50
  }
 ],
 "id": "overlay_4F6A7537_5A7A_88E6_41BF_E382075E396F",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_825A6AD8_92F2_AA3C_41BE_BF145366F802); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.7,
   "hfov": 17.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8AF26AA6_9DD8_BD96_41E0_804575340E74",
   "pitch": -3.75,
   "yaw": -78.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 50
  }
 ],
 "id": "overlay_4F64CD26_5A7A_98E6_41A9_E8F3132CC4FB",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95, this.camera_826A5ACB_92F2_AA1C_41D4_BCF7178CC936); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.07,
   "hfov": 17.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0E0A9D_9DD8_BDBA_41D1_CAEEE8EDDB5F",
   "pitch": -8.01,
   "yaw": 150.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.26,
   "distance": 50
  }
 ],
 "id": "overlay_466C6068_5A4D_896A_41D1_76FDD91C0A19",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_835C7BD1_92F2_AA0C_41B5_EE6DF1EF8B65); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.09,
   "hfov": 15.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0D5A9D_9DD8_BDBA_41D8_6E727A00F9A3",
   "pitch": -8.89,
   "yaw": 173.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.78,
   "distance": 100
  }
 ],
 "id": "overlay_418E1A18_5A4B_98AA_41C7_E6F4D26E18D4",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196, this.camera_834C9BDE_92F2_AA34_41D3_06F6F675705E); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.6,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8B0EAA9D_9DD8_BDBA_41B2_EBBCED4AE9CA",
   "pitch": 0.86,
   "yaw": -75.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "distance": 50
  }
 ],
 "id": "overlay_408947E1_5A4A_979A_41C4_9B2FE94D7F4E",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.09,
   "hfov": 13.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 332,
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5,
   "yaw": 120.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.72,
   "distance": 50
  }
 ],
 "id": "overlay_0F102031_1652_DAD6_41AE_22E4E69B9337",
 "data": {
  "label": "Aula"
 }
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "propagateClick": true,
 "id": "Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3",
 "left": "0%",
 "width": 10000,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "skin/Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3.png",
 "minHeight": 1,
 "top": "-0.03%",
 "bottom": "98.58%",
 "borderRadius": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_7AF0C260_5BCF_889A_41CB_9B5619F79CFF",
  "this.Button_7AF0F260_5BCF_889A_41C0_1AD90E4A0DDF",
  "this.Button_7AF09260_5BCF_889A_41D1_5EB4C0529ECD"
 ],
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "id": "Container_7AF0D260_5BCF_889A_41D1_E076440204F0",
 "left": "0%",
 "width": 1006,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "height": 69.15,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "horizontalAlign": "left"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0D4A9C_9DD8_BDBA_41D7_D7302116223F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0EBA9C_9DD8_BDBA_41DD_4DC94BAE8E31",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B04DA91_9DD8_BD8A_41D4_74324D9654F1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B042A91_9DD8_BD8A_41DE_0F39696BEDCD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B021A90_9DD8_BD8A_41CF_ECDDA85033CD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B027A90_9DD8_BD8A_41C4_4E9927A220F5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0B6A9B_9DD8_BDBE_41AC_4B505A4C0456",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8B0B2A9B_9DD8_BDBE_41B1_E1734F492E25",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0F3AA3_9DD8_BD8E_41D2_5F953ECEB808",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B097A9A_9DD8_BDBE_41DE_D435584E0CA2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_846890AB_9E38_AD9E_41D0_8F442A7EB813",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8AF0AAA4_9DD8_BD8A_41D8_BF7BBB6FF527",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF04AA4_9DD8_BD8A_41C8_AB68A6D48D2E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0C3A9B_9DD8_BDBE_41CD_C0BECFBAFF3F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0D8A9C_9DD8_BDBA_41CE_34C89DA624C2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0DDA9C_9DD8_BDBA_41A5_2B20C333AB54",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_8B083A99_9DD8_BDBA_41DA_E5B1A5FCBFE4",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_93067665_9DD7_F48B_41B4_A7DE99890F82_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_84033E2C_9DC8_749A_41E3_7C6F32B13497",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF37AA6_9DD8_BD96_41D5_74FFBB97A93A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_8B028A90_9DD8_BD8A_4164_E9D68B42159C",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9379D57F_9DD8_B776_41D9_A590CEAA3C94_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B02DA90_9DD8_BD8A_41E2_47BAF07BBB39",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B07EA99_9DD8_BDBA_41C6_712591A1239F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B075A99_9DD8_BDBA_41D8_3E1FF09AF4FE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_0C99C0B2_15F6_7BD5_41B1_D28BD729A34D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B007A8F_9DD8_BD96_41DB_0D1BF9CF91A9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B01BA90_9DD8_BD8A_41DA_9D7C5CB18F42",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_8B03FA91_9DD8_BD8A_41C4_F8D784DC2099",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_8B035A91_9DD8_BD8A_41A2_3436E4D9E812",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_902C71D4_9DD8_AF89_41E0_A681A0C92AA0_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_0CB09EC4_164E_A7BD_41A6_CEA8E809F352",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8AF3DAA6_9DD8_BD96_41D6_0942C39F6ABE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_0CFCEFDD_1651_E54E_41B1_78E02D871D74",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_963DF185_9DC8_EF8B_41D7_87E1F73AEFE6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_0C9BE4AC_164E_FBCD_41A0_A57A4A2E4361",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF2BAA5_9DD8_BD8A_41C9_10DFC11F03BE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF1AAA4_9DD8_BD8B_41D6_7C67404C8C16",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF17AA5_9DD8_BD8A_41D0_42B85C242FBA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0A6A9B_9DD8_BDBE_41E0_4E298AA5577F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B01FA90_9DD8_BD8A_41E3_BC0E773B87B3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B014A90_9DD8_BD8A_41B0_E0DB72F3EE41",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8AF31AA6_9DD8_BD96_41DB_624A750CF11D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0E6A9D_9DD8_BDBA_41DC_028CD6B1DE11",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0FDA9E_9DD8_BDB3_41E1_FB87BEEC5B47",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0CCA9B_9DD8_BDBE_41E1_72A26F50E753",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF10AA5_9DD8_BD8A_41BE_6BF156C84942",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF21AA5_9DD8_BD8A_41B7_1636FFF0266B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8AF26AA6_9DD8_BD96_41E0_804575340E74",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0E0A9D_9DD8_BDBA_41D1_CAEEE8EDDB5F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 400,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_8B0D5A9D_9DD8_BDBA_41D8_6E727A00F9A3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8B0EAA9D_9DD8_BDBA_41B2_EBBCED4AE9CA",
 "frameCount": 24
},
{
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "propagateClick": true,
 "id": "Button_7AF0C260_5BCF_889A_41CB_9B5619F79CFF",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 0,
 "width": 166.4,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "rollOverShadow": false,
 "borderColor": "#000000",
 "layout": "horizontal",
 "iconHeight": 0,
 "height": 40,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "14px",
 "mode": "push",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "label": "HALAMAN UTAMA",
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "shadow": false,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "propagateClick": true,
 "id": "Button_7AF0F260_5BCF_889A_41C0_1AD90E4A0DDF",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "width": 163.6,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "layout": "horizontal",
 "iconHeight": 32,
 "height": 40,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "14px",
 "mode": "push",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "label": "INFO PENGEMBANG",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/info-pengembang.html', '_top')",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "propagateClick": true,
 "id": "Button_7AF09260_5BCF_889A_41D1_5EB4C0529ECD",
 "pressedBackgroundOpacity": 1,
 "iconWidth": 32,
 "width": 165.2,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "layout": "horizontal",
 "iconHeight": 32,
 "height": 40,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "14px",
 "mode": "push",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "label": "VISI MISI SEKOLAH",
 "paddingTop": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/visi-misi.html', '_top')",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
}],
 "desktopMipmappingEnabled": false,
 "borderRadius": 0,
 "minWidth": 20,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player5883"
 },
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
