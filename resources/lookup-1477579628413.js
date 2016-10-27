(function(window, undefined) {
  var dictionary = {
    "3b854b56-acea-4a45-8e1c-26022ff97a92": "Technology 5",
    "b59f8fde-9ced-46e8-bc83-55bb58d566ee": "Technology 4",
    "b2654623-c74b-4be3-a42f-a75527c4a843": "Technology 3",
    "1a32bbfe-e1e2-4322-99ca-10e584ec7a4d": "Technology 2",
    "c9d34373-0119-4c05-82d9-28aabb99fb87": "Go Deeper",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Crash Lessons",
    "4727d8a3-29c9-4bef-badb-c5299ccba9ff": "Technology 0",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);