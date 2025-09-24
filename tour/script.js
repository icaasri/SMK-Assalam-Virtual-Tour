(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7AF04260_5BCF_889A_41C2_F0279B469031",
  "this.WebFrame_7C408747_5BFE_88A6_41CE_CA32A78EAD22",
  "this.Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1",
  "this.Button_7DA69836_5BFD_98E6_41CB_891812F48214"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": 126.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73A18898_5BCD_F9AA_416F_FF0DB4FF29E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 157.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73D3F93C_5BCD_F8EA_41D3_F191A65DD579",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (20)",
 "hfovMin": "120%",
 "id": "panorama_4E189537_4183_A3C4_41CA_8657761AB960",
 "overlays": [
  "this.overlay_46DFDD5D_5A4F_98AA_41BE_66C92DB34E1F",
  "this.overlay_47F21CF3_5A4E_B97E_41CF_55744777355F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 30.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.18,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "distance": 1
  },
  {
   "yaw": -30.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 43.76,
   "panorama": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -8.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_705F25A6_5BCD_8BE6_41C2_7BF161A159FF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 24.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_732697A9_5BCD_F7EA_41BE_13034D850CCF",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (10)",
 "hfovMin": "120%",
 "id": "panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB",
 "overlays": [
  "this.overlay_42650D98_5A55_FBAA_41C6_94A6933C0261",
  "this.overlay_43D1986A_5A55_996E_41AC_B9D476DE68FD",
  "this.overlay_42EBB39B_5A56_8FAE_41D5_3431BD73B470"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -177.43,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "distance": 1
  },
  {
   "yaw": -155.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.79,
   "panorama": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "distance": 1
  },
  {
   "yaw": -39.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.36,
   "panorama": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70A825B3_5BCD_8BFE_41D0_BAD8EF61EC15",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_739528E7_5BCD_F966_41CF_E9CE2325778E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (4)",
 "hfovMin": "120%",
 "id": "panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63",
 "overlays": [
  "this.overlay_52B081AD_4186_E2C4_41CB_24D015422BF0",
  "this.overlay_52D34733_4183_AFDC_41AA_49E43BE7DE05"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -143.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.32,
   "panorama": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "distance": 1
  },
  {
   "yaw": -1.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -151.17,
   "panorama": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (8)",
 "hfovMin": "120%",
 "id": "panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
 "overlays": [
  "this.overlay_54B63813_5A5A_98BF_41C7_45D5E19CB261",
  "this.overlay_5535FAA6_5A5D_99E6_41B7_CE7645F549AD",
  "this.overlay_55AB82B3_5A55_89FE_41CB_AEE465368837",
  "this.overlay_4B8073FA_5A56_8F6E_41D1_89021B0C8ECA",
  "this.overlay_4A99F955_5A55_98BA_41CC_CA36FFB03C2A",
  "this.overlay_4BCA55EE_5A55_8B66_4191_99125EF05A63",
  "this.overlay_4BAF5BF1_5A75_7F7A_41D0_D6EF2DC86710",
  "this.overlay_4E3DFDD5_5A7D_7BBA_41B4_DC3050883A03",
  "this.overlay_43CAFC2E_5A5D_98E9_41B0_027EEE731CA0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 39.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.85,
   "panorama": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
   "distance": 1
  },
  {
   "yaw": -81.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.57,
   "panorama": "this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE",
   "distance": 1
  },
  {
   "yaw": -150.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.7,
   "panorama": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
   "distance": 1
  },
  {
   "yaw": -53.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.48,
   "panorama": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
   "distance": 1
  },
  {
   "yaw": -114.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.57,
   "panorama": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
   "distance": 1
  },
  {
   "yaw": 115.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 66.42,
   "panorama": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB",
   "distance": 1
  },
  {
   "yaw": 61.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -97.43,
   "panorama": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
   "distance": 1
  },
  {
   "yaw": -136.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.99,
   "panorama": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722",
   "distance": 1
  },
  {
   "yaw": 157.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 34.39,
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (25)",
 "hfovMin": "120%",
 "id": "panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
 "overlays": [
  "this.overlay_4F30FA06_5A7B_78A6_41D4_1D7EAC82205C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -50.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.23,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_707CA57C_5BCD_8B6A_41B0_A3B2A58E6AEF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -145.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73E8A905_5BCD_F89A_41CD_C76C474E52AB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E187D38_4183_63CC_41BB_9B528DA47595_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (29)",
 "hfovMin": "120%",
 "id": "panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
 "overlays": [
  "this.overlay_4F64CD26_5A7A_98E6_41A9_E8F3132CC4FB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -78.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.81,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 29.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70B785C2_5BCD_8B9E_41C3_C627B9D12527",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (23)",
 "hfovMin": "120%",
 "id": "panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
 "overlays": [
  "this.overlay_45462EDB_5A4B_99AE_41A1_070F43BC39A9",
  "this.overlay_44D4A947_5A4A_98A6_41D4_1692D8FFD1A5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 173.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 128.23,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "distance": 1
  },
  {
   "yaw": -145,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.26,
   "panorama": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (28)",
 "hfovMin": "120%",
 "id": "panorama_57990342_5A5E_889E_41C7_E36DDA767722",
 "overlays": [
  "this.overlay_4F6A7537_5A7A_88E6_41BF_E382075E396F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -67.99,
   "class": "AdjacentPanorama",
   "backwardYaw": -136.38,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 98.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CFB2724_5BCD_889A_41A2_069FB52CA59F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (17)",
 "hfovMin": "120%",
 "id": "panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
 "overlays": [
  "this.overlay_5CF3761D_4C34_8A7F_4193_74D270AD6CB1",
  "this.overlay_5EA5F32C_4C37_8A5D_41C1_12715B67F380",
  "this.overlay_468E7ABD_5A57_79EA_41C1_B8A88A19F388",
  "this.overlay_4057CF13_5A55_98BE_41B2_5A045AFDFDD6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 128.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.35,
   "panorama": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "distance": 1
  },
  {
   "yaw": -22.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 30.64,
   "panorama": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -0.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.09,
   "panorama": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (31)",
 "hfovMin": "120%",
 "id": "panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
 "overlays": [
  "this.overlay_4C93B68C_5A76_89AA_41A7_3457BB85B76F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -88.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.77,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 126.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_730B67F3_5BCD_F77E_41C4_14891005CA9D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -51.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_700A752C_5BCD_88E7_41BC_D32586FCD11E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (9)",
 "hfovMin": "120%",
 "id": "panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
 "overlays": [
  "this.overlay_54E734B7_41FE_E2C4_41BF_713E485045A5",
  "this.overlay_57598D09_4187_63CC_41C9_A27AE7479B53",
  "this.overlay_550FB2C5_4185_6644_41CD_8979432D0B64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -155.57,
   "panorama": "this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 147.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.05,
   "panorama": "this.panorama_4E79E489_4182_A2CC_4180_C101785793DA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 101.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73AAF8A9_5BCD_F9EB_41D3_BD4EC3E8E15D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (19)",
 "hfovMin": "120%",
 "id": "panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
 "overlays": [
  "this.overlay_466C6068_5A4D_896A_41D1_76FDD91C0A19"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 150.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.6,
   "panorama": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -118.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_701FE552_5BCD_88BE_41D4_12E2003C396B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7207C986_5BCD_FBA6_41CE_AF79F6C7BF92",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (5)",
 "hfovMin": "120%",
 "id": "panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
 "overlays": [
  "this.overlay_5267FE85_418D_BEC4_41C6_66B8DCE3ACC7",
  "this.overlay_52292DDE_418E_A244_41CA_1C074EE65003"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.8,
   "panorama": "this.panorama_4E79E489_4182_A2CC_4180_C101785793DA",
   "distance": 1
  },
  {
   "yaw": -151.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.05,
   "panorama": "this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E180809_4185_61CC_419C_73BF32B85618_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_733787C5_5BCD_F79A_41C1_B9F03A0A387A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 91.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7354D886_5BCD_F9A6_41CA_B98F5CFCD87C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CC02743_5BCD_889F_41D2_9155FB5E9D4C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73B518B7_5BCD_F9E6_41D2_1BD2EEDC5811",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -140.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70697560_5BCD_889A_41B6_79D7B7D23CB7",
 "class": "PanoramaCamera"
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
 "initialPosition": {
  "yaw": 112.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_739FA8F6_5BCD_F966_41CF_5C64C8F96097",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 56.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_730537E4_5BCD_F79A_41C3_B972E478BAF8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 28.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CD6977B_5BCD_F76E_4195_4BBBACBE300B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (1)",
 "hfovMin": "120%",
 "id": "panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D",
 "overlays": [
  "this.overlay_5382DEF6_419D_5E44_4195_F1316D2838AF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 1.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.07,
   "panorama": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 102.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70531598_5BCD_8BAA_41B5_871D57B37B0F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (3)",
 "hfovMin": "120%",
 "id": "panorama_4E180809_4185_61CC_419C_73BF32B85618",
 "overlays": [
  "this.overlay_50736269_4183_A64C_41CA_76014A16C9AF",
  "this.overlay_5367957F_4186_E244_41C1_5B4953B7519A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.35,
   "panorama": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "distance": 1
  },
  {
   "yaw": -16.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -143.55,
   "panorama": "this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (32)",
 "hfovMin": "120%",
 "id": "panorama_579902EB_5A5E_896F_41AF_4E4466A745DB",
 "overlays": [
  "this.overlay_42A8FA83_5A77_F99E_41CB_559AD1BCA7D9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 66.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 115.47,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (11)",
 "hfovMin": "120%",
 "id": "panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
 "overlays": [
  "this.overlay_57041DD6_418E_A244_41CB_B78AD84312E5",
  "this.overlay_56919EA1_4183_FEFC_41CE_83546DF5C8A4",
  "this.overlay_4274D858_5A4D_B8AA_41A7_C6CA4DD5D8A8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -177.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.21,
   "panorama": "this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB",
   "distance": 1
  },
  {
   "yaw": -82.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -77.59,
   "panorama": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
   "distance": 1
  },
  {
   "yaw": 0.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.85,
   "panorama": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CDA578A_5BCD_F7AE_41B8_71A99ED3344B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 104.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CC74750_5BCD_88BA_41C8_D07F11896787",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 11.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_708C05DE_5BCD_8BA6_41D0_715BC4BE068D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (18)",
 "hfovMin": "120%",
 "id": "panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
 "overlays": [
  "this.overlay_418E1A18_5A4B_98AA_41C7_E6F4D26E18D4",
  "this.overlay_408947E1_5A4A_979A_41C4_9B2FE94D7F4E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -75.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 150.07,
   "panorama": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
   "distance": 1
  },
  {
   "yaw": 173.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.72,
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -113.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_738838D7_5BCD_F9A6_419B_0106060B6530",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (26)",
 "hfovMin": "120%",
 "id": "panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE",
 "overlays": [
  "this.overlay_4FF90D5B_5A7B_B8AE_41CB_431E83229343"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -53.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.44,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70E485FA_5BCD_8B6E_41CA_DA1EE3955680",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -22.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_733D27D5_5BCD_F7BA_41A7_7BF59EC0A82F",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (30)",
 "hfovMin": "120%",
 "id": "panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
 "overlays": [
  "this.overlay_4CAC0AAB_5A75_F9EE_41D2_444B0CA7208D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -97.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.03,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 36.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73C9792F_5BCD_F8E6_41CD_46C97024E7A3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57990342_5A5E_889E_41C7_E36DDA767722_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (6)",
 "hfovMin": "120%",
 "id": "panorama_4E79E489_4182_A2CC_4180_C101785793DA",
 "overlays": [
  "this.overlay_54815527_4182_E3C4_41B6_89C190D35CBC",
  "this.overlay_55550F1E_4183_BFC4_41A8_C009599F47CA",
  "this.overlay_522BC781_4183_6EBC_41CD_9F6773F7CE0F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -18.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.12,
   "panorama": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "distance": 1
  },
  {
   "yaw": 0.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.29,
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "distance": 1
  },
  {
   "yaw": -167.8,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.14,
   "panorama": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 178.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73688832_5BCD_F8FE_41D4_2575C61D3921",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 140.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73F5A913_5BCD_F8BE_41C1_01BC29F76AEB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (21)",
 "hfovMin": "120%",
 "id": "panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
 "overlays": [
  "this.overlay_47BA8D3A_5A4D_98EE_41D2_356A395356E6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 43.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -30.53,
   "panorama": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -149.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_723CA977_5BCD_FB66_41AC_78287F621F7E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E189537_4183_A3C4_41CA_8657761AB960_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -29.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7073856E_5BCD_8B66_41B6_031BBFF77C9E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 2.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7376E854_5BCD_F8BA_41B9_2840FF6A8EDC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -136.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73DC894A_5BCD_F8AE_41D2_F964F87BF454",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -32.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7080A5CF_5BCD_8BA6_41CF_F703C3401C3D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 43.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73189812_5BCD_F8BE_41B7_1BB7298832E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_72339968_5BCD_FB6A_41C9_636ED79C9832",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (24)",
 "hfovMin": "120%",
 "id": "panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
 "overlays": [
  "this.overlay_449DD0B9_5A4A_89EA_41D5_879DF95FE524"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 130.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -145,
   "panorama": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 161.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_732F27B8_5BCD_F7EA_41D2_B92546723D74",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7049958A_5BCD_8BAE_41C3_C7F578CF200A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (14)",
 "hfovMin": "120%",
 "id": "panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
 "overlays": [
  "this.overlay_59B156AF_4186_AEC4_41C5_B020FB73A7C1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -77.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -82.44,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 163.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CD1476D_5BCD_F76A_41D2_FCAC7445DA7A",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_camera"
  },
  {
   "media": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_camera"
  },
  {
   "media": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618_camera"
  },
  {
   "media": "this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_camera"
  },
  {
   "media": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_camera"
  },
  {
   "media": "this.panorama_4E79E489_4182_A2CC_4180_C101785793DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E79E489_4182_A2CC_4180_C101785793DA_camera"
  },
  {
   "media": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_camera"
  },
  {
   "media": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_camera"
  },
  {
   "media": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_camera"
  },
  {
   "media": "this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_camera"
  },
  {
   "media": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_camera"
  },
  {
   "media": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_camera"
  },
  {
   "media": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_camera"
  },
  {
   "media": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_camera"
  },
  {
   "media": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_camera"
  },
  {
   "media": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_camera"
  },
  {
   "media": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_camera"
  },
  {
   "media": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_camera"
  },
  {
   "media": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_camera"
  },
  {
   "media": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E189537_4183_A3C4_41CA_8657761AB960_camera"
  },
  {
   "media": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_camera"
  },
  {
   "media": "this.panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_camera"
  },
  {
   "media": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595_camera"
  },
  {
   "media": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_camera"
  },
  {
   "media": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_camera"
  },
  {
   "media": "this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_camera"
  },
  {
   "media": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_camera"
  },
  {
   "media": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57990342_5A5E_889E_41C7_E36DDA767722_camera"
  },
  {
   "media": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_camera"
  },
  {
   "media": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_camera"
  },
  {
   "media": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_camera"
  },
  {
   "media": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (2)",
 "hfovMin": "120%",
 "id": "panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649",
 "overlays": [
  "this.overlay_505BC91F_419F_E3C4_41C1_BD3F52FEC397",
  "this.overlay_509658C1_419D_A2BC_41C1_70CD6575F2C8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -6.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.35,
   "panorama": "this.panorama_4E180809_4185_61CC_419C_73BF32B85618",
   "distance": 1
  },
  {
   "yaw": 172.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.89,
   "panorama": "this.panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_709B85EA_5BCD_8B6C_41C9_907FFFB2BE58",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 149.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70FD6615_5BCD_88BA_41D3_932BA8B1E22D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E79E489_4182_A2CC_4180_C101785793DA_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (27)",
 "hfovMin": "120%",
 "id": "panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66",
 "overlays": [
  "this.overlay_4F333299_5A7A_89AA_41D3_5F8B03AB3308"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -53.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.27,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (7)",
 "hfovMin": "120%",
 "id": "panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
 "overlays": [
  "this.overlay_558020C0_4187_A2BC_41BC_5A192C6FF034",
  "this.overlay_55DCFCAF_4185_A2C4_41CF_E16FC6C7E1C7",
  "this.overlay_5476E00F_4183_E1C4_41C2_0BF77B86AA78"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -168.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.44,
   "panorama": "this.panorama_4E79E489_4182_A2CC_4180_C101785793DA",
   "distance": 1
  },
  {
   "yaw": 34.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.1,
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "distance": 1
  },
  {
   "yaw": -37.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -123.24,
   "panorama": "this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 142.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CCD375F_5BCD_88A6_41AE_EFBFEABF71E0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -96.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70F06606_5BCD_88A6_41D5_54244CA9B24E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (13)",
 "hfovMin": "120%",
 "id": "panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2",
 "overlays": [
  "this.overlay_4332E978_5A5A_BB6A_41D4_CC91E9DCD0CD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -75.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -39.08,
   "panorama": "this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 126.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73BE68C7_5BCD_F9A6_41CF_7A876502B0A1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 104.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_734A7877_5BCD_F965_41D4_F6F42B4F9FBE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 97.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7229C958_5BCD_F8AA_41C4_50042F933ED0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (15)",
 "hfovMin": "120%",
 "id": "panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
 "overlays": [
  "this.overlay_59FCA7E7_4187_AE44_41B0_14FB120EAAFA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 83.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -97.5,
   "panorama": "this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -49.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70141544_5BCD_889A_41B4_210C754B7340",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (12)",
 "hfovMin": "120%",
 "id": "panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA",
 "overlays": [
  "this.overlay_59E0E178_4182_E24C_41A5_DBB3FFA2A73E",
  "this.overlay_563D9E7B_4185_5E4C_41A5_256DF6E905E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 171.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.87,
   "panorama": "this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3",
   "distance": 1
  },
  {
   "yaw": -97.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 83.78,
   "panorama": "this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 173.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73FC091F_5BCD_F8A6_4196_CFE4908DB049",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73415867_5BCD_F966_41D1_DBE55567358D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E_t.jpg",
 "hfovMin": "120%",
 "id": "panorama_4E188F67_4183_7E44_41B8_7A506B3B9B8E",
 "label": "page (22)",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -178.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73238799_5BCD_F7AA_41AA_206630072E01",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/0/{row}_{column}.jpg",
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "page (16)",
 "hfovMin": "120%",
 "id": "panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66",
 "overlays": [
  "this.overlay_4176659D_4C35_8E7F_41A7_4733A60576ED",
  "this.overlay_5D65B4FD_4C3C_8FBE_41D2_6C8DEBE257FF",
  "this.overlay_5C510466_4C3C_8ECA_41C4_69F52CBFCDC5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -123.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -37.89,
   "panorama": "this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 65.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73136802_5BCD_F89E_4177_5A865C06BBCC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7CFFC734_5BCD_88FA_41C8_EB99B0E67BFF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 12.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_73609821_5BCD_F89A_41B8_D345095F4685",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_736EC842_5BCD_F89E_41CB_0BB8822218F7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_camera",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7AF04260_5BCF_889A_41C2_F0279B469031",
 "left": "0%",
 "children": [
  "this.Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3",
  "this.Container_7AF0D260_5BCF_889A_41D1_E076440204F0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 69.15,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_7AF04260_5BCF_889A_41C2_F0279B469031.png",
 "layout": "absolute"
},
{
 "id": "WebFrame_7C408747_5BFE_88A6_41CE_CA32A78EAD22",
 "backgroundOpacity": 1,
 "width": "100%",
 "right": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "8.576%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame69720"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "maxHeight": 225,
 "maxWidth": 225,
 "id": "Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1",
 "left": "0.56%",
 "backgroundOpacity": 0,
 "width": "5.567%",
 "verticalAlign": "middle",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_7DDA8B8A_5BFE_BFAE_41D4_B710D1AFE9B1.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "7.41%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image69923"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DA69836_5BFD_98E6_41CB_891812F48214",
 "left": "6.79%",
 "width": 280.4,
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "gap": 5,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": false,
 "top": "1.37%",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "fontSize": "21px",
 "fontFamily": "Segoe UI Bold",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "SMK ASSALAM SAMARANG",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#000000",
 "fontWeight": "bold"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 30.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_73D3F93C_5BCD_F8EA_41D3_F191A65DD579); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CDA403_5A35_889E_41B6_3482A5A3D3FC",
   "pitch": -5.27,
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.64,
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
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -30.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18827E_4183_6644_41B2_B5143B89F5CF, this.camera_73DC894A_5BCD_F8AE_41D2_F964F87BF454); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CD6403_5A35_889E_41A3_490EE28CC3C2",
   "pitch": -5.07,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.53,
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
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -39.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2, this.camera_734A7877_5BCD_F965_41D4_F6F42B4F9FBE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43F80992_5A55_9BBE_41D5_6A394251F3E2",
   "pitch": -10.47,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.08,
   "distance": 50
  }
 ],
 "id": "overlay_42650D98_5A55_FBAA_41C6_94A6933C0261",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.39,
   "yaw": 0.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_7376E854_5BCD_F8BA_41B9_2840FF6A8EDC); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43F85992_5A55_9BBE_417D_F905093201A3",
   "pitch": -15.33,
   "hfov": 16.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.21,
   "distance": 100
  }
 ],
 "id": "overlay_43D1986A_5A55_996E_41AC_B9D476DE68FD",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 36.82,
   "yaw": -155.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E, this.camera_73415867_5BCD_F966_41D1_DBE55567358D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43C7C992_5A55_9BBE_41C7_4D0811F44D0D",
   "pitch": -56.27,
   "hfov": 36.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.57,
   "distance": 100
  }
 ],
 "id": "overlay_42EBB39B_5A56_8FAE_41D5_3431BD73B470",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.29,
   "yaw": -143.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E180809_4185_61CC_419C_73BF32B85618, this.camera_7CD1476D_5BCD_F76A_41D2_FCAC7445DA7A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_589F5C6E_4C55_BEDA_41D3_078409D274FF",
   "pitch": -1.22,
   "hfov": 24.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -143.55,
   "distance": 50
  }
 ],
 "id": "overlay_52B081AD_4186_E2C4_41CB_24D015422BF0",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": -1.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE, this.camera_7CD6977B_5BCD_F76E_4195_4BBBACBE300B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E7DF7D_5A5A_B76A_41B5_B79B77E607CB",
   "pitch": -2.89,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.05,
   "distance": 100
  }
 ],
 "id": "overlay_52D34733_4183_AFDC_41AA_49E43BE7DE05",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.92,
   "yaw": 39.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE, this.camera_7354D886_5BCD_F9A6_41CA_B98F5CFCD87C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B638A9_5A4D_79EB_41A2_A0443FE895B9",
   "pitch": 2.89,
   "hfov": 3.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.77,
   "distance": 50
  }
 ],
 "id": "overlay_54B63813_5A5A_98BF_41C7_45D5E19CB261",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.29,
   "yaw": 61.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57992C0E_5A5E_98A6_41C7_163F2596C142, this.camera_739528E7_5BCD_F966_41CF_E9CE2325778E); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B9C8AA_5A4D_79EE_41D3_D4C4CE3494D2",
   "pitch": 2.07,
   "hfov": 6.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 61.03,
   "distance": 100
  }
 ],
 "id": "overlay_5535FAA6_5A5D_99E6_41B7_CE7645F549AD",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.92,
   "yaw": -150.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4, this.camera_73AAF8A9_5BCD_F9EB_41D3_BD4EC3E8E15D); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B958AA_5A4D_79EE_41B0_5F2CD76C67DD",
   "pitch": 2.93,
   "hfov": 3.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.81,
   "distance": 50
  }
 ],
 "id": "overlay_55AB82B3_5A55_89FE_41CB_AEE465368837",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -136.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57990342_5A5E_889E_41C7_E36DDA767722, this.camera_739FA8F6_5BCD_F966_41CF_5C64C8F96097); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B8D8AB_5A4D_79EE_41D6_7732A0B4FB75",
   "pitch": 3.05,
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -136.38,
   "distance": 100
  }
 ],
 "id": "overlay_4B8073FA_5A56_8F6E_41D1_89021B0C8ECA",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.39,
   "yaw": -114.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66, this.camera_73BE68C7_5BCD_F9A6_41CF_7A876502B0A1); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B888AB_5A4D_79EE_41D2_9656FAD23439",
   "pitch": 3.1,
   "hfov": 6.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.27,
   "distance": 100
  }
 ],
 "id": "overlay_4A99F955_5A55_98BA_41CC_CA36FFB03C2A",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.39,
   "yaw": -81.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE, this.camera_73A18898_5BCD_F9AA_416F_FF0DB4FF29E6); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42B818AC_5A4D_79EA_41D5_32C81524D39A",
   "pitch": 2.78,
   "hfov": 6.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -81.44,
   "distance": 100
  }
 ],
 "id": "overlay_4BCA55EE_5A55_8B66_4191_99125EF05A63",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.28,
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_579902EB_5A5E_896F_41AF_4E4466A745DB, this.camera_738838D7_5BCD_F9A6_419B_0106060B6530); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BB98AC_5A4D_79EA_41C6_3DFD1F975EF6",
   "pitch": 0.87,
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.47,
   "distance": 100
  }
 ],
 "id": "overlay_4BAF5BF1_5A75_7F7A_41D0_D6EF2DC86710",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.92,
   "yaw": -53.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B, this.camera_73B518B7_5BCD_F9E6_41D2_1BD2EEDC5811); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BB48AC_5A4D_79EA_41C8_C5132B4C230B",
   "pitch": 3.34,
   "hfov": 3.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.23,
   "distance": 100
  }
 ],
 "id": "overlay_4E3DFDD5_5A7D_7BBA_41B4_DC3050883A03",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.11,
   "yaw": 157.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_8_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF, this.camera_73E8A905_5BCD_F89A_41CD_C76C474E52AB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E2EF82_5A5A_B79E_41D4_FB9DFC07A55B",
   "pitch": -3.68,
   "hfov": 9.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.1,
   "distance": 100
  }
 ],
 "id": "overlay_43CAFC2E_5A5D_98E9_41B0_027EEE731CA0",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11,
   "yaw": -50.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_730B67F3_5BCD_F77E_41C4_14891005CA9D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BF28B2_5A4D_79FE_41D5_51917C1FB6FD",
   "pitch": 0.03,
   "hfov": 11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.48,
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
 "maps": [
  {
   "hfov": 17.93,
   "yaw": -78.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_70B785C2_5BCD_8B9E_41C3_C627B9D12527); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4281D8B4_5A4D_79FA_41D0_F515275A01DA",
   "pitch": -3.75,
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -78.7,
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
 "maps": [
  {
   "hfov": 12.74,
   "yaw": 173.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_700A752C_5BCD_88E7_41BC_D32586FCD11E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CD3403_5A35_889E_41C3_2B44C49D0A14",
   "pitch": -10.93,
   "hfov": 12.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.35,
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
 "maps": [
  {
   "hfov": 10.13,
   "yaw": -145,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4, this.camera_70141544_5BCD_889A_41B4_210C754B7340); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CCF403_5A35_889E_412D_64D6E4851D6C",
   "pitch": -10.28,
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -145,
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
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -67.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_73189812_5BCD_F8BE_41B7_1BB7298832E6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BE38B4_5A4D_79FA_41C4_9B509D3297F5",
   "pitch": -1.42,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.99,
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
 "maps": [
  {
   "hfov": 7.85,
   "yaw": -0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95, this.camera_7207C986_5BCD_FBA6_41CE_AF79F6C7BF92); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CCF2CD2_5A3D_99BE_41C0_5A03C80C974C",
   "pitch": -4.89,
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.72,
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
 "maps": [
  {
   "hfov": 11.94,
   "yaw": -174.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58955C87_4C55_BE4A_41B4_DC91005749A4",
   "pitch": -0.53,
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.85,
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
 "maps": [
  {
   "hfov": 10.69,
   "yaw": 128.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595, this.camera_72339968_5BCD_FB6A_41C9_636ED79C9832); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7B8DC74B_5A4E_88AE_41C2_4B529565E9F5",
   "pitch": -1.98,
   "hfov": 10.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 128.23,
   "distance": 100
  }
 ],
 "id": "overlay_468E7ABD_5A57_79EA_41C1_B8A88A19F388",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.33,
   "yaw": -22.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E189537_4183_A3C4_41CA_8657761AB960, this.camera_723CA977_5BCD_FB66_41AC_78287F621F7E); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7872274B_5A4E_88AE_4194_E4D4482D2B6C",
   "pitch": 0.11,
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -22.18,
   "distance": 50
  }
 ],
 "id": "overlay_4057CF13_5A55_98BE_41B2_5A045AFDFDD6",
 "data": {
  "label": "Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.44,
   "yaw": -88.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_70697560_5BCD_889A_41B6_79D7B7D23CB7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_428118B4_5A4D_79FA_41D3_57531785C41C",
   "pitch": -2.59,
   "hfov": 20.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.85,
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
 "maps": [
  {
   "hfov": 15.93,
   "yaw": 0.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB, this.camera_732697A9_5BCD_F7EA_41BE_13034D850CCF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58987C76_4C55_BECA_41C5_6333AB08049C",
   "pitch": 21.84,
   "hfov": 15.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.79,
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
 "maps": [
  {
   "hfov": 25.4,
   "yaw": 147.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E79E489_4182_A2CC_4180_C101785793DA, this.camera_732F27B8_5BCD_F7EA_41D2_B92546723D74); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58983C7F_4C55_BEBB_41C0_1785EBEBB0C0",
   "pitch": -25.52,
   "hfov": 25.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.12,
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
 "maps": [
  {
   "hfov": 17.96,
   "yaw": 40.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58997C7F_4C55_BEBB_41C3_5229E065A438",
   "pitch": -14.33,
   "hfov": 17.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.32,
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
 "maps": [
  {
   "hfov": 17.26,
   "yaw": 150.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95, this.camera_7CC74750_5BCD_88BA_41C8_D07F11896787); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7873574B_5A4E_88AE_41A0_A96A2BEA8D7C",
   "pitch": -8.01,
   "hfov": 17.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 150.07,
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
 "maps": [
  {
   "hfov": 16.56,
   "yaw": -0.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E79E489_4182_A2CC_4180_C101785793DA, this.camera_73609821_5BCD_F89A_41B8_D345095F4685); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_589FFC75_4C55_BECE_41C9_A2D35B1729CD",
   "pitch": -15.13,
   "hfov": 16.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.14,
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
 "maps": [
  {
   "hfov": 20.55,
   "yaw": -151.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63, this.camera_73688832_5BCD_F8FE_41D4_2575C61D3921); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E65F7E_5A5A_B766_41BB_6005C2B44F4F",
   "pitch": -11.93,
   "hfov": 20.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -151.17,
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
 "maps": [
  {
   "hfov": 16.16,
   "yaw": 1.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649, this.camera_70A825B3_5BCD_8BFE_41D0_BAD8EF61EC15); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E54F77_5A5A_B766_4198_96F3ABAB3F26",
   "pitch": -8.36,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.89,
   "distance": 100
  }
 ],
 "id": "overlay_5382DEF6_419D_5E44_4195_F1316D2838AF",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -16.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63, this.camera_73C9792F_5BCD_F8E6_41CD_46C97024E7A3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E49F77_5A5A_B766_41C2_B07D8A087576",
   "pitch": -0.18,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.32,
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
 "maps": [
  {
   "hfov": 12.79,
   "yaw": -175.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649, this.camera_73FC091F_5BCD_F8A6_4196_CFE4908DB049); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_589CEC6E_4C55_BEDA_41C5_AD7D474DD773",
   "pitch": -2.03,
   "hfov": 12.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.35,
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
 "maps": [
  {
   "hfov": 13.99,
   "yaw": 66.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_7CC02743_5BCD_889F_41D2_9155FB5E9D4C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4280C8B5_5A4D_79FA_41CA_2D3BF51D2FE6",
   "pitch": -6.29,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.42,
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
 "maps": [
  {
   "hfov": 23.43,
   "yaw": -82.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F5576_4183_A244_41B3_2631DD3124A1, this.camera_70531598_5BCD_8BAA_41B5_871D57B37B0F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40356C64_5A4B_989A_41D6_616D8126F4E6",
   "pitch": -13.07,
   "hfov": 23.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.44,
   "distance": 100
  }
 ],
 "id": "overlay_57041DD6_418E_A244_41CB_B78AD84312E5",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": 0.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA, this.camera_705F25A6_5BCD_8BE6_41C2_7BF161A159FF); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40368C64_5A4B_989A_41D4_7FB55D73D2FF",
   "pitch": -10.56,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.87,
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
 "maps": [
  {
   "hfov": 7.28,
   "yaw": -177.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB, this.camera_7049958A_5BCD_8BAE_41C3_C7F578CF200A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40362C64_5A4B_989A_41C6_0E1A13DB9D4F",
   "pitch": -17.04,
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -177.43,
   "distance": 100
  }
 ],
 "id": "overlay_4274D858_5A4D_B8AA_41A7_C6CA4DD5D8A8",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.78,
   "yaw": 173.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611, this.camera_707CA57C_5BCD_8B6A_41B0_A3B2A58E6AEF); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7872A74B_5A4E_88AE_41CB_508E520808E4",
   "pitch": -8.89,
   "hfov": 15.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.09,
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
 "maps": [
  {
   "hfov": 10.29,
   "yaw": -75.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196, this.camera_7073856E_5BCD_8B66_41B6_031BBFF77C9E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7872F74B_5A4E_88AE_41C3_CB9734042D5F",
   "pitch": 0.86,
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.6,
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
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -53.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_7CFB2724_5BCD_889A_41A2_069FB52CA59F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BEC8B2_5A4D_79FE_41CB_B4ADE32026B3",
   "pitch": -1.42,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.57,
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
 "maps": [
  {
   "hfov": 16.31,
   "yaw": -97.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_701FE552_5BCD_88BE_41D4_12E2003C396B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_428168B4_5A4D_79FA_41D2_EF167209F4A0",
   "pitch": -3.96,
   "hfov": 16.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.43,
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
 "maps": [
  {
   "hfov": 5.88,
   "yaw": -18.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E, this.camera_7080A5CF_5BCD_8BA6_41CF_F703C3401C3D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD55CCE_5A3D_99A6_41D1_1FA53E1BFAA7",
   "pitch": 3.31,
   "hfov": 5.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.05,
   "distance": 100
  }
 ],
 "id": "overlay_54815527_4182_E3C4_41B6_89C190D35CBC",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 0.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF, this.camera_708C05DE_5BCD_8BA6_41D0_715BC4BE068D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD4FCCE_5A3D_99A6_41B5_1F0338F879A2",
   "pitch": -6.76,
   "hfov": 8.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.44,
   "distance": 100
  }
 ],
 "id": "overlay_55550F1E_4183_BFC4_41A8_C009599F47CA",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.95,
   "yaw": -167.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE, this.camera_709B85EA_5BCD_8B6C_41C9_907FFFB2BE58); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD41CCE_5A3D_99A6_41B6_7CD76B36D231",
   "pitch": -13.63,
   "hfov": 14.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.8,
   "distance": 100
  }
 ],
 "id": "overlay_522BC781_4183_6EBC_41CD_9F6773F7CE0F",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.98,
   "yaw": 43.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E189537_4183_A3C4_41CA_8657761AB960, this.camera_70FD6615_5BCD_88BA_41D3_932BA8B1E22D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CD0403_5A35_889E_41B1_A6EA15E6F86E",
   "pitch": -5.68,
   "hfov": 15.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.76,
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
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 130.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E187D38_4183_63CC_41BB_9B528DA47595, this.camera_7CFFC734_5BCD_88FA_41C8_EB99B0E67BFF); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_44CCA403_5A35_889E_41AE_253D60187094",
   "pitch": -5.24,
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130.26,
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
 "maps": [
  {
   "hfov": 12.98,
   "yaw": -77.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_7229C958_5BCD_F8AA_41C4_50042F933ED0); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_409ACA85_5A5D_999A_41CE_FD7386660F9C",
   "pitch": -5.68,
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.59,
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
 "maps": [
  {
   "hfov": 12.72,
   "yaw": -6.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E180809_4185_61CC_419C_73BF32B85618, this.camera_7CDA578A_5BCD_F7AE_41B8_71A99ED3344B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E46F77_5A5A_B766_41C8_F5E9DAB4409C",
   "pitch": -4.72,
   "hfov": 12.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.35,
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
 "maps": [
  {
   "hfov": 9.79,
   "yaw": 172.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D, this.camera_73238799_5BCD_F7AA_41AA_206630072E01); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_47E4DF77_5A5A_B766_41A9_40CA2966D8EB",
   "pitch": -3.96,
   "hfov": 9.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.07,
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
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -53.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_73136802_5BCD_F89E_4177_5A865C06BBCC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42BE78B2_5A4D_79FE_41D4_69D7EBCCB646",
   "pitch": -1.42,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.57,
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
 "maps": [
  {
   "hfov": 13.38,
   "yaw": 34.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE, this.camera_733D27D5_5BCD_F7BA_41A7_7BF59EC0A82F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_1_HS_0_0.png",
      "width": 325,
      "class": "ImageResourceLevel",
      "height": 276
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87,
   "yaw": 34.39
  }
 ],
 "id": "overlay_558020C0_4187_A2BC_41BC_5A192C6FF034",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -168.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E79E489_4182_A2CC_4180_C101785793DA, this.camera_733787C5_5BCD_F79A_41C1_B9F03A0A387A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD79CCE_5A3D_99A6_41B1_A21D7DFC1A16",
   "pitch": -8.86,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.29,
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
 "maps": [
  {
   "hfov": 9.45,
   "yaw": -37.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66, this.camera_730537E4_5BCD_F79A_41C3_B972E478BAF8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD72CCE_5A3D_99A6_41D1_0CCAE7AB01BA",
   "pitch": -3.37,
   "hfov": 9.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -37.89,
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
 "maps": [
  {
   "hfov": 12.17,
   "yaw": -75.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB, this.camera_73F5A913_5BCD_F8BE_41C1_01BC29F76AEB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_409ABA85_5A5D_999A_41D4_06AE9BF0C63F",
   "pitch": -5.64,
   "hfov": 12.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.36,
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
 "maps": [
  {
   "hfov": 11.77,
   "yaw": 83.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA, this.camera_736EC842_5BCD_F89E_41CB_0BB8822218F7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_409A6A87_5A5D_99A6_41B9_A607E31E8470",
   "pitch": -8.02,
   "hfov": 11.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.78,
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
 "maps": [
  {
   "hfov": 18.15,
   "yaw": 171.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3, this.camera_70E485FA_5BCD_8B6E_41CA_DA1EE3955680); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_58986C7F_4C55_BEBB_41D0_C6E7D475F85C",
   "pitch": -12.66,
   "hfov": 18.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.85,
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
 "maps": [
  {
   "hfov": 38,
   "yaw": -97.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94, this.camera_70F06606_5BCD_88A6_41D5_54244CA9B24E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5898CC7F_4C55_BEBB_41C5_67B1AFBA7B8D",
   "pitch": -20.23,
   "hfov": 38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.5,
   "distance": 100
  }
 ],
 "id": "overlay_563D9E7B_4185_5E4C_41A5_256DF6E905E8",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.33,
   "yaw": -2.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CCC2CD2_5A3D_99BE_41D5_E393D040B937",
   "pitch": -6.64,
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.4,
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
 "maps": [
  {
   "hfov": 10.21,
   "yaw": -123.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF, this.camera_7CCD375F_5BCD_88A6_41AE_EFBFEABF71E0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_589A5C7F_4C55_BEBB_41B4_ADA0E0DF9A7D",
   "pitch": -7.53,
   "hfov": 10.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -123.24,
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
 "maps": [
  {
   "hfov": 16.42,
   "yaw": 164.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CCF8CD2_5A3D_99BE_41D5_B395E391796D",
   "pitch": -4.94,
   "hfov": 16.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 164.14,
   "distance": 50
  }
 ],
 "id": "overlay_5C510466_4C3C_8ECA_41C4_69F52CBFCDC5",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3",
 "left": "0%",
 "width": 10000,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_7AF32260_5BCF_889A_41D6_475FAEF40DB3.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "-0.03%",
 "bottom": "98.58%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_7AF0D260_5BCF_889A_41D1_E076440204F0",
 "left": "0%",
 "width": 1006,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_7AF0C260_5BCF_889A_41CB_9B5619F79CFF",
  "this.Button_7AF0F260_5BCF_889A_41C0_1AD90E4A0DDF",
  "this.Button_7AF09260_5BCF_889A_41D1_5EB4C0529ECD"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 69.15,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal"
},
{
 "levels": [
  {
   "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CDA403_5A35_889E_41B6_3482A5A3D3FC",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E189537_4183_A3C4_41CA_8657761AB960_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CD6403_5A35_889E_41A3_490EE28CC3C2",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_43F80992_5A55_9BBE_41D5_6A394251F3E2",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_43F85992_5A55_9BBE_417D_F905093201A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F8088_4182_A2CC_41CF_67DD0D9FD0DB_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_43C7C992_5A55_9BBE_41C7_4D0811F44D0D",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_589F5C6E_4C55_BEDA_41D3_078409D274FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18770A_4185_6FCC_41C2_41EFC7E83E63_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E7DF7D_5A5A_B76A_41B5_B79B77E607CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B638A9_5A4D_79EB_41A2_A0443FE895B9",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B9C8AA_5A4D_79EE_41D3_D4C4CE3494D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B958AA_5A4D_79EE_41B0_5F2CD76C67DD",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B8D8AB_5A4D_79EE_41D6_7732A0B4FB75",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_4_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B888AB_5A4D_79EE_41D2_9656FAD23439",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_5_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42B818AC_5A4D_79EA_41D5_32C81524D39A",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_6_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BB98AC_5A4D_79EA_41C6_3DFD1F975EF6",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_7_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BB48AC_5A4D_79EA_41C8_C5132B4C230B",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7D6207_4182_E1C4_41A0_C3B42EF439AE_0_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E2EF82_5A5A_B79E_41D4_FB9DFC07A55B",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_54EE612C_5A5E_88EA_418C_31844B2FDC6B_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BF28B2_5A4D_79FE_41D5_51917C1FB6FD",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_57A8BF89_5A5E_F7AA_41CD_50A570B982F4_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4281D8B4_5A4D_79FA_41D0_F515275A01DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CD3403_5A35_889E_41C3_2B44C49D0A14",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E187D38_4183_63CC_41BB_9B528DA47595_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CCF403_5A35_889E_412D_64D6E4851D6C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_57990342_5A5E_889E_41C7_E36DDA767722_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BE38B4_5A4D_79FA_41C4_9B509D3297F5",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CCF2CD2_5A3D_99BE_41C0_5A03C80C974C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_58955C87_4C55_BE4A_41B4_DC91005749A4",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7B8DC74B_5A4E_88AE_41C2_4B529565E9F5",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18AC3B_4183_E1CC_41B5_8FC7E2084611_0_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7872274B_5A4E_88AE_4194_E4D4482D2B6C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_57AF47A0_5A5E_B79A_41A4_AAE0ED504FCE_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_428118B4_5A4D_79FA_41D3_57531785C41C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_58987C76_4C55_BECA_41C5_6333AB08049C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_58983C7F_4C55_BEBB_41C0_1785EBEBB0C0",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7E9207_4182_A1C4_41A0_F8DFC104807E_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_58997C7F_4C55_BEBB_41C3_5229E065A438",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18E7D4_4183_AE44_4192_7ACCA6D31196_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7873574B_5A4E_88AE_41A0_A96A2BEA8D7C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_589FFC75_4C55_BECE_41C9_A2D35B1729CD",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E4C7693_4182_AEDC_41BA_42691E09FBFE_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E65F7E_5A5A_B766_41BB_6005C2B44F4F",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_51606CA3_4185_A2FC_41C8_FCBA6DDBFF2D_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E54F77_5A5A_B766_4198_96F3ABAB3F26",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E49F77_5A5A_B766_41C2_B07D8A087576",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E180809_4185_61CC_419C_73BF32B85618_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_589CEC6E_4C55_BEDA_41C5_AD7D474DD773",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_579902EB_5A5E_896F_41AF_4E4466A745DB_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_4280C8B5_5A4D_79FA_41CA_2D3BF51D2FE6",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_40356C64_5A4B_989A_41D6_616D8126F4E6",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_40368C64_5A4B_989A_41D4_7FB55D73D2FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F9E73_4183_5E5C_41CC_09BEA3D0A2E3_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_40362C64_5A4B_989A_41C6_0E1A13DB9D4F",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7872A74B_5A4E_88AE_41CB_508E520808E4",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1889DD_4183_E244_41B9_8EA9D247CA95_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7872F74B_5A4E_88AE_41C3_CB9734042D5F",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_579F0B9E_5A5E_BFA6_41D3_5A43388C83FE_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BEC8B2_5A4D_79FE_41CB_B4ADE32026B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_57992C0E_5A5E_98A6_41C7_163F2596C142_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_428168B4_5A4D_79FA_41D2_EF167209F4A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD55CCE_5A3D_99A6_41D1_1FA53E1BFAA7",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD4FCCE_5A3D_99A6_41B5_1F0338F879A2",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E79E489_4182_A2CC_4180_C101785793DA_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD41CCE_5A3D_99A6_41B6_7CD76B36D231",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E18827E_4183_6644_41B2_B5143B89F5CF_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CD0403_5A35_889E_41B1_A6EA15E6F86E",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E196A3D_4182_A1C4_4187_A63E1049A3A4_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_44CCA403_5A35_889E_41AE_253D60187094",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F5576_4183_A244_41B3_2631DD3124A1_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_409ACA85_5A5D_999A_41CE_FD7386660F9C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E46F77_5A5A_B766_41C8_F5E9DAB4409C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1C0A70_4185_A65C_41C7_48F738B0E649_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_47E4DF77_5A5A_B766_41A9_40CA2966D8EB",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_57A9E798_5A5E_97AA_41B4_21F443B49F66_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_42BE78B2_5A4D_79FE_41D4_69D7EBCCB646",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD79CCE_5A3D_99A6_41B1_A21D7DFC1A16",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E7A4351_4182_E65C_41A8_7ED93FEC07FF_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD72CCE_5A3D_99A6_41D1_0CCAE7AB01BA",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1FD8B1_4183_62DC_41CB_F0171D74FCF2_0_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_409ABA85_5A5D_999A_41D4_06AE9BF0C63F",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F7219_4183_A1CC_4185_44EDDEBA0E94_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_409A6A87_5A5D_99A6_41B9_A607E31E8470",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_58986C7F_4C55_BEBB_41D0_C6E7D475F85C",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1FAB7C_4183_6644_41B4_63221ED709AA_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_5898CC7F_4C55_BEBB_41C5_67B1AFBA7B8D",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CCC2CD2_5A3D_99BE_41D5_E393D040B937",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_589A5C7F_4C55_BEBB_41B4_ADA0E0DF9A7D",
 "rowCount": 6,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_4E1F7E7E_4183_DE44_41BA_B4E196325E66_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CCF8CD2_5A3D_99BE_41D5_B395E391796D",
 "rowCount": 6,
 "colCount": 4
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_7AF0C260_5BCF_889A_41CB_9B5619F79CFF",
 "backgroundOpacity": 0,
 "width": 166.4,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "gap": 5,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/index.html', '_top')",
 "fontSize": "14px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "label": "HALAMAN UTAMA",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_7AF0F260_5BCF_889A_41C0_1AD90E4A0DDF",
 "backgroundOpacity": 0,
 "width": 163.6,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/info-pengembang.html', '_top')",
 "fontSize": "14px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "INFO PENGEMBANG",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_7AF09260_5BCF_889A_41D1_5EB4C0529ECD",
 "backgroundOpacity": 0,
 "width": 165.2,
 "shadowColor": "#000000",
 "fontFamily": "Segoe UI Bold",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://smk-assalam-virtual-tour.vercel.app/visi-misi.html', '_top')",
 "fontSize": "14px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "VISI MISI SEKOLAH",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player5883"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
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
