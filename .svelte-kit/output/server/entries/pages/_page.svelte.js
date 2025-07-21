import { v as sanitize_props, w as rest_props, p as push, x as fallback, y as ensure_array_like, z as spread_attributes, A as clsx, B as element, n as slot, C as bind_props, m as pop, D as spread_props, E as attr_style, u as escape_html, F as attr_class, G as attr, I as maybe_selected, J as stringify, K as copy_payload, L as assign_payload, M as head } from "../../chunks/index.js";
/**
 * @license lucide-svelte v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Book_open($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 7v14" }],
    [
      "path",
      {
        "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "book-open" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$payload, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function File_text($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$payload, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Globe($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$payload, spread_props([
    { name: "globe" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Graduation_cap($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { "d": "M22 10v6" }],
    [
      "path",
      { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "graduation-cap" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Image($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["circle", { "cx": "9", "cy": "9", "r": "2" }],
    [
      "path",
      {
        "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "image" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Map_pin($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "10", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "map-pin" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Mic($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
      }
    ],
    ["path", { "d": "M19 10v2a7 7 0 0 1-14 0v-2" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "19",
        "y2": "22"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "mic" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  Icon($$payload, spread_props([
    { name: "plus" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Search($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "11", "cy": "11", "r": "8" }
    ],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  Icon($$payload, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Tag($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
      }
    ],
    [
      "circle",
      {
        "cx": "7.5",
        "cy": "7.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "tag" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function User($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Wifi_off($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20h.01" }],
    ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }],
    [
      "path",
      { "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }
    ],
    [
      "path",
      { "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }
    ],
    [
      "path",
      { "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }
    ],
    [
      "path",
      { "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }
    ],
    ["path", { "d": "m2 2 20 20" }]
  ];
  Icon($$payload, spread_props([
    { name: "wifi-off" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Wifi($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20h.01" }],
    ["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }],
    ["path", { "d": "M5 12.859a10 10 0 0 1 14 0" }],
    ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]
  ];
  Icon($$payload, spread_props([
    { name: "wifi" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Home($$payload, $$props) {
  push();
  let {
    languages,
    selectedLanguage,
    isOnline,
    theme,
    themeStyles,
    quickReferences,
    emergencyKit,
    activeTab = void 0
  } = $$props;
  const each_array = ensure_array_like(emergencyKit.points);
  const each_array_1 = ensure_array_like(quickReferences);
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl p-4 text-white"${attr_style(theme === "sepia" ? "background: linear-gradient(to right, #A67C00, #8B6914);" : theme === "dark" ? "background: linear-gradient(to right, #4A9B7A, #3A7F62);" : "background: linear-gradient(to right, #059669, #047857);")}><h2 class="text-xl font-bold mb-2">As-salamu alaykum!</h2> <div class="flex items-center space-x-4"><div class="flex items-center space-x-2">`;
  Globe($$payload, { size: 14 });
  $$payload.out += `<!----> <span class="text-xs">${escape_html(languages.find((l) => l.code === selectedLanguage)?.name)}</span></div> <div class="flex items-center space-x-2"><div${attr_class(`w-2 h-2 rounded-full ${isOnline ? "bg-green-400" : "bg-orange-400"}`)}></div> <span class="text-xs">${escape_html(isOnline ? "Online" : "Offline")}</span></div></div></div> <div class="space-y-4"><h2 class="text-lg font-bold" style="color: var(--text-primary);">Quick Actions</h2> <div class="grid grid-cols-2 gap-3"><button class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80" style="background-color: var(--color-active);">Read Quran</button> <button class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80" style="background-color: var(--color-active);">Voice Search</button> <button class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80" style="background-color: var(--color-active);">Find Mosques</button> <button class="p-3 rounded-lg text-white font-medium text-sm hover:opacity-80" style="background-color: var(--color-active);">Common Questions</button></div></div> <div class="rounded-xl shadow-md p-4 border cursor-pointer hover:shadow-lg transition-all" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Quick Tableegh</h3> <div class="rounded-lg p-3" style="background-color: var(--bg-accent);"><h4 class="font-medium text-sm mb-2" style="color: var(--text-primary);">${escape_html(emergencyKit.title)}</h4> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let point = each_array[$$index];
    $$payload.out += `<div class="text-xs mb-1" style="color: var(--text-muted);">• ${escape_html(point)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex items-center justify-end mt-3">`;
  Chevron_right($$payload, {
    style: "color: var(--color-inactive);",
    size: 20
  });
  $$payload.out += `<!----></div></div> <div class="space-y-4"><h2 class="text-lg font-bold" style="color: var(--text-primary);">Quick References</h2> <div class="grid grid-cols-2 gap-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let ref = each_array_1[$$index_1];
    $$payload.out += `<div class="p-3 rounded-lg border cursor-pointer hover:opacity-80" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="text-xs font-bold mb-1" style="color: var(--color-active);">${escape_html(ref.title)}</div> <div class="text-xs mb-1" style="color: var(--text-primary);">${escape_html(ref.verse)}</div> <div class="text-xs" style="color: var(--text-muted);">${escape_html(ref.translation)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { activeTab });
  pop();
}
function Dawah($$payload, $$props) {
  push();
  let {
    languages,
    selectedLanguage = void 0,
    audienceLanguage = void 0,
    isOnline = void 0,
    theme,
    quickSearchQuery = void 0,
    isRecording = void 0,
    smartSuggestions,
    quickSearchResults,
    misconceptionResponses,
    getSearchResponseKey
  } = $$props;
  const each_array = ensure_array_like(languages);
  const each_array_1 = ensure_array_like(languages);
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl p-6 text-white"${attr_style(theme === "sepia" ? "background: linear-gradient(to right, #A67C00, #8B6914);" : theme === "dark" ? "background: linear-gradient(to right, #4A9B7A, #3A7F62);" : "background: linear-gradient(to right, #059669, #047857);")}><h2 class="text-2xl font-bold mb-2">As-salamu alaykum!</h2> <p class="opacity-90">Ready to share the message of Islam today?</p> <div class="flex items-center mt-4 space-x-4"><div class="flex items-center space-x-2">`;
  Globe($$payload, { size: 16 });
  $$payload.out += `<!----> <span class="text-sm">${escape_html(languages.find((l) => l.code === selectedLanguage)?.name)}</span></div> <div class="flex items-center space-x-2"><div${attr_class(`w-3 h-3 rounded-full ${isOnline ? "bg-green-400" : "bg-orange-400"}`)}></div> <span class="text-sm">${escape_html(isOnline ? "Online" : "Offline")}</span></div></div></div> <div class="rounded-xl shadow-md p-4 border" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center justify-between mb-3"><h3 class="font-semibold" style="color: var(--text-primary);">Quick Da'wah Assistant</h3> <div class="flex items-center space-x-2"><button class="p-1 rounded-lg hover:opacity-70">`;
  if (isOnline) {
    $$payload.out += "<!--[-->";
    Wifi($$payload, {
      style: "color: var(--color-active);",
      size: 16
    });
  } else {
    $$payload.out += "<!--[!-->";
    Wifi_off($$payload, { class: "text-orange-600", size: 16 });
  }
  $$payload.out += `<!--]--></button></div></div> <div class="flex space-x-2 mb-3"><select class="flex-1 p-2 text-xs border rounded-lg focus:ring-2 focus:outline-none" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">`;
  $$payload.select_value = selectedLanguage;
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let lang = each_array[$$index];
    $$payload.out += `<option${attr("value", lang.code)}${maybe_selected($$payload, lang.code)}>Da'i: ${escape_html(lang.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select> <select class="flex-1 p-2 text-xs border rounded-lg focus:ring-2 focus:outline-none" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">`;
  $$payload.select_value = audienceLanguage;
  $$payload.out += `<!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let lang = each_array_1[$$index_1];
    $$payload.out += `<option${attr("value", lang.code)}${maybe_selected($$payload, lang.code)}>Audience: ${escape_html(lang.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="relative mb-3"><textarea placeholder="Type, speak, or scan text for translation..." class="w-full h-24 p-3 pr-20 border rounded-lg focus:ring-2 focus:outline-none resize-none text-sm" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">`;
  const $$body = escape_html(quickSearchQuery);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <div class="absolute bottom-3 right-3 flex space-x-1"><button class="p-2 rounded-lg transition-colors"${attr_style(isRecording ? "background-color: #fee2e2; color: #dc2626;" : "background-color: var(--bg-accent);")}>`;
  Mic($$payload, { size: 14 });
  $$payload.out += `<!----></button> <button class="p-2 rounded-lg transition-colors" style="background-color: var(--bg-accent);" title="Camera Translation">`;
  Image($$payload, { size: 14 });
  $$payload.out += `<!----></button></div></div> `;
  if (!quickSearchQuery) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(smartSuggestions);
    $$payload.out += `<div class="space-y-3"><h4 class="text-sm font-medium" style="color: var(--text-primary);">Common Questions:</h4> <!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let suggestion = each_array_2[$$index_2];
      $$payload.out += `<button class="w-full text-left p-2 rounded-lg hover:opacity-80 text-sm" style="background-color: var(--bg-accent);"><span style="color: var(--text-primary);">${escape_html(suggestion)}</span></button>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (quickSearchQuery) {
    $$payload.out += "<!--[-->";
    const each_array_3 = ensure_array_like(quickSearchResults);
    $$payload.out += `<div class="max-h-40 overflow-y-auto space-y-3"><!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let result = each_array_3[$$index_3];
      $$payload.out += `<div class="border rounded-lg overflow-hidden" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="px-3 py-2 text-xs font-bold text-white"${attr_style(result.type === "quran" ? "background-color: #059669;" : "background-color: #2563eb;")}>${escape_html(result.source)}</div> <div class="p-3"><div class="flex items-center justify-between mb-2"><h4 class="font-medium text-sm" style="color: var(--text-primary);">${escape_html(result.title)}</h4> <span class="text-xs" style="color: var(--text-muted);">${escape_html(result.relevance)}% match</span></div> <p class="text-xs mb-2" style="color: var(--text-muted);">${escape_html(result.content)}</p> `;
      if (result.translation) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p class="text-xs font-arabic" style="color: var(--color-active);">${escape_html(result.translation)}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div></div>`;
    }
    $$payload.out += `<!--]--> `;
    if (getSearchResponseKey()) {
      $$payload.out += "<!--[-->";
      const key = getSearchResponseKey();
      const response = misconceptionResponses[key];
      const each_array_4 = ensure_array_like(response.points);
      $$payload.out += `<div class="border rounded-lg p-3" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="mb-2"><span class="px-2 py-1 rounded text-xs font-bold text-white bg-red-600">MISCONCEPTION</span></div> <div><h4 class="font-bold text-sm mb-2" style="color: var(--text-primary);">${escape_html(response.title)}</h4> <!--[-->`;
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let point = each_array_4[$$index_4];
        $$payload.out += `<div class="text-xs mb-1" style="color: var(--text-muted);">• ${escape_html(point)}</div>`;
      }
      $$payload.out += `<!--]--> <div class="text-xs mt-2 font-medium" style="color: var(--color-active);">${escape_html(response.verse)}</div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, {
    selectedLanguage,
    audienceLanguage,
    isOnline,
    quickSearchQuery,
    isRecording
  });
  pop();
}
function Learn($$payload, $$props) {
  push();
  let {
    learnSearchQuery = void 0,
    learningSections,
    apologeticsTools,
    theme
  } = $$props;
  const each_array = ensure_array_like(learningSections);
  const each_array_2 = ensure_array_like(apologeticsTools);
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><div class="relative">`;
  Search($$payload, {
    class: "absolute left-3 top-3",
    style: "color: var(--color-inactive);",
    size: 20
  });
  $$payload.out += `<!----> <input type="text" placeholder="Search Islamic knowledge..."${attr("value", learnSearchQuery)} class="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"/></div></div> <div class="space-y-4"><h2 class="text-xl font-bold" style="color: var(--text-primary);">Islamic Knowledge</h2> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let section = each_array[$$index_1];
    $$payload.out += `<div class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="p-3 rounded-lg group-hover:opacity-80 transition-colors" style="background-color: var(--bg-accent);"><!---->`;
    section.icon?.($$payload, {
      style: "color: var(--color-active);",
      size: 24
    });
    $$payload.out += `<!----></div> <div class="flex-1"><h3 class="font-semibold" style="color: var(--text-primary);">${escape_html(section.title)}</h3> <p class="text-sm" style="color: var(--text-muted);">${escape_html(section.subtitle)}</p> `;
    if (section.features) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(section.features);
      $$payload.out += `<div class="flex flex-wrap gap-1 mt-1"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let feature = each_array_1[$$index];
        $$payload.out += `<span class="text-xs px-2 py-1 rounded-full"${attr_style(`background-color: var(--color-active); color: ${stringify(theme === "dark" ? "#1e1e1e" : "#ffffff")};`)}>${escape_html(feature)}</span>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> <div class="flex items-center space-x-2">`;
    Chevron_right($$payload, {
      style: "color: var(--color-inactive);",
      size: 20
    });
    $$payload.out += `<!----></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="space-y-4"><h2 class="text-lg font-bold" style="color: var(--text-primary);">Debate &amp; Apologetics</h2> <div class="grid grid-cols-2 gap-3"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let tool = each_array_2[$$index_2];
    $$payload.out += `<div class="p-3 rounded-lg border cursor-pointer hover:opacity-80" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center space-x-2 mb-2"><!---->`;
    tool.icon?.($$payload, {
      style: "color: var(--color-active);",
      size: 20
    });
    $$payload.out += `<!----> <div class="text-xs font-bold" style="color: var(--text-primary);">${escape_html(tool.title)}</div></div> <div class="text-xs" style="color: var(--text-muted);">${escape_html(tool.subtitle)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { learnSearchQuery });
  pop();
}
function Location($$payload, $$props) {
  push();
  let {
    locationInput = void 0,
    locationData,
    nearbyMosques
  } = $$props;
  const each_array = ensure_array_like(nearbyMosques);
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Location Analysis</h3> <div class="flex space-x-2 mb-4"><input type="text" placeholder="Enter location or use GPS..."${attr("value", locationInput)} class="flex-1 p-3 border rounded-lg focus:ring-2 focus:outline-none" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"/> <button class="text-white px-4 py-3 rounded-lg hover:opacity-80" style="background-color: var(--color-active);">`;
  Map_pin($$payload, { size: 16 });
  $$payload.out += `<!----></button></div></div> <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Cultural Context</h3> <div class="space-y-3"><div><span class="text-sm font-medium" style="color: var(--text-primary);">Country:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.country)}</span></div> <div><span class="text-sm font-medium" style="color: var(--text-primary);">Primary Language:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.language)}</span></div> <div><span class="text-sm font-medium" style="color: var(--text-primary);">Culture:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.culture)}</span></div> <div><span class="text-sm font-medium" style="color: var(--text-primary);">Religion:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.religion)}</span></div> <div><span class="text-sm font-medium" style="color: var(--text-primary);">Common Misconceptions:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.misconceptions)}</span></div> <div><span class="text-sm font-medium" style="color: var(--text-primary);">Recommended Approach:</span> <span class="text-sm ml-2" style="color: var(--text-muted);">${escape_html(locationData.approach)}</span></div></div></div> <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Nearby Islamic Centers</h3> <div class="space-y-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let mosque = each_array[$$index];
    $$payload.out += `<div class="flex items-center justify-between p-3 rounded-lg" style="background-color: var(--bg-accent);"><div><h4 class="font-medium text-sm" style="color: var(--text-primary);">${escape_html(mosque.name)}</h4> <p class="text-xs" style="color: var(--text-muted);">${escape_html(mosque.address)}</p></div> <span class="text-xs font-medium" style="color: var(--color-active);">${escape_html(mosque.distance)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { locationInput });
  pop();
}
function Test($$payload, $$props) {
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl p-6 text-white"${attr_style("background: linear-gradient(to right, #2563eb, #7c3aed);")}><h2 class="text-xl font-bold mb-2">Knowledge Assessment</h2> <p class="opacity-90">Test your Islamic knowledge and Da'wah skills</p></div> <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Learning Progress</h3> <div class="p-3 rounded-lg mb-4" style="background-color: var(--bg-accent);"><p class="text-sm" style="color: var(--text-primary);">You last learned in: <span class="font-semibold">Tawheed - Chapter 3: Names and Attributes of Allah</span></p> <p class="text-xs mt-1" style="color: var(--text-muted);">Progress: 67% complete</p></div> <button class="w-full text-white py-3 rounded-lg font-medium hover:opacity-80" style="background-color: var(--color-active);">Continue Learning</button></div> <div class="space-y-4"><div class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="p-3 rounded-lg group-hover:opacity-80 transition-colors" style="background-color: var(--bg-accent);">`;
  Graduation_cap($$payload, {
    style: "color: var(--color-active);",
    size: 24
  });
  $$payload.out += `<!----></div> <div class="flex-1"><h3 class="font-semibold" style="color: var(--text-primary);">Knowledge Quiz</h3> <p class="text-sm" style="color: var(--text-muted);">Test your understanding of Islamic concepts</p></div></div> `;
  Chevron_right($$payload, {
    style: "color: var(--color-inactive);",
    size: 20
  });
  $$payload.out += `<!----></div></div> <div class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="p-3 rounded-lg group-hover:opacity-80 transition-colors" style="background-color: var(--bg-accent);">`;
  Mic($$payload, {
    style: "color: var(--color-active);",
    size: 24
  });
  $$payload.out += `<!----></div> <div class="flex-1"><h3 class="font-semibold" style="color: var(--text-primary);">Da'wah Skills Assessment</h3> <p class="text-sm" style="color: var(--text-muted);">Evaluate your communication abilities</p></div></div> `;
  Chevron_right($$payload, {
    style: "color: var(--color-inactive);",
    size: 20
  });
  $$payload.out += `<!----></div></div> <div class="rounded-xl shadow-md p-4 border hover:shadow-lg transition-all cursor-pointer group" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="p-3 rounded-lg group-hover:opacity-80 transition-colors" style="background-color: var(--bg-accent);">`;
  Users($$payload, {
    style: "color: var(--color-active);",
    size: 24
  });
  $$payload.out += `<!----></div> <div class="flex-1"><h3 class="font-semibold" style="color: var(--text-primary);">Scenario-Based Tests</h3> <p class="text-sm" style="color: var(--text-muted);">Practice real-world Da'wah situations</p></div></div> `;
  Chevron_right($$payload, {
    style: "color: var(--color-inactive);",
    size: 20
  });
  $$payload.out += `<!----></div></div></div> <div class="rounded-xl p-4" style="background-color: var(--bg-accent);"><h3 class="font-semibold mb-2" style="color: var(--text-primary);">Your Stats</h3> <div class="grid grid-cols-3 gap-4 text-center"><div><div class="text-2xl font-bold" style="color: var(--color-active);">85%</div> <div class="text-xs" style="color: var(--color-active);">Overall Score</div></div> <div><div class="text-2xl font-bold" style="color: var(--color-active);">23</div> <div class="text-xs" style="color: var(--color-active);">Tests Completed</div></div> <div><div class="text-2xl font-bold" style="color: var(--color-active);">12</div> <div class="text-xs" style="color: var(--color-active);">Areas Mastered</div></div></div></div></div>`;
}
function Profile($$payload, $$props) {
  push();
  let {
    languages,
    selectedLanguage = void 0,
    isOnline = void 0
  } = $$props;
  const each_array = ensure_array_like(languages);
  $$payload.out += `<div class="space-y-6"><div class="rounded-xl shadow-md p-6" style="background-color: var(--bg-secondary);"><div class="flex items-center space-x-4 mb-4"><div class="w-16 h-16 rounded-full flex items-center justify-center" style="background-color: var(--bg-accent);">`;
  User($$payload, {
    style: "color: var(--color-active);",
    size: 24
  });
  $$payload.out += `<!----></div> <div><h2 class="text-xl font-bold" style="color: var(--text-primary);">Ayub Jibaly</h2> <p class="text-sm" style="color: var(--text-muted);">Da'i since 2019</p></div></div> <div class="grid grid-cols-2 gap-4 text-center"><div class="p-3 rounded-lg" style="background-color: var(--bg-accent);"><div class="text-lg font-bold" style="color: var(--color-active);">156</div> <div class="text-xs" style="color: var(--color-active);">People Reached</div></div> <div class="p-3 rounded-lg" style="background-color: var(--bg-accent);"><div class="text-lg font-bold" style="color: var(--color-active);">43</div> <div class="text-xs" style="color: var(--color-active);">Conversations</div></div></div></div> <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-4" style="color: var(--text-primary);">App Settings</h3> <div class="space-y-4"><div><label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Display Language</label> <select class="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none" style="background-color: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">`;
  $$payload.select_value = selectedLanguage;
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let lang = each_array[$$index];
    $$payload.out += `<option${attr("value", lang.code)}${maybe_selected($$payload, lang.code)}>${escape_html(lang.flag)} ${escape_html(lang.name)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex items-center justify-between py-3"><span class="text-sm font-medium" style="color: var(--text-primary);">Auto Sync</span> <button class="px-4 py-2 rounded-lg text-xs font-medium transition-colors"${attr_style(isOnline ? "background-color: var(--bg-accent);" : "background-color: var(--bg-accent); opacity: 0.6;")}>${escape_html(isOnline ? "Enabled" : "Disabled")}</button></div> <div class="flex items-center justify-between py-3"><span class="text-sm font-medium" style="color: var(--text-primary);">Offline Content</span> <button class="text-white px-4 py-2 rounded-lg text-xs font-medium hover:opacity-80" style="background-color: var(--color-active);">Sync Now</button></div></div></div> <div class="rounded-xl shadow-md p-4" style="background-color: var(--bg-secondary);"><h3 class="font-semibold mb-3" style="color: var(--text-primary);">Storage &amp; Data</h3> <div class="space-y-3"><div class="flex justify-between text-sm" style="color: var(--text-muted);"><span>Quran Audio</span> <span>245 MB</span></div> <div class="flex justify-between text-sm" style="color: var(--text-muted);"><span>Hadith Database</span> <span>156 MB</span></div> <div class="flex justify-between text-sm" style="color: var(--text-muted);"><span>Educational Videos</span> <span>1.2 GB</span></div> <div class="pt-2 border-t" style="border-color: var(--border-color);"><div class="flex justify-between text-sm font-medium" style="color: var(--text-primary);"><span>Total Used</span> <span>1.6 GB / 4 GB</span></div> <div class="w-full rounded-full h-2 mt-2" style="background-color: var(--border-color);"><div class="h-2 rounded-full" style="width: 40%; background-color: var(--color-active);"></div></div></div></div></div></div>`;
  bind_props($$props, { selectedLanguage, isOnline });
  pop();
}
function _page($$payload, $$props) {
  push();
  let activeTab = "home";
  let selectedLanguage = "en";
  let audienceLanguage = "ar";
  let quickSearchQuery = "";
  let learnSearchQuery = "";
  let locationInput = "";
  let isOnline = true;
  let isRecording = false;
  let theme = "light";
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "ur", name: "اردو", flag: "🇵🇰" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" }
  ];
  const learningSections = [
    {
      title: "Al-Quran Al-Kareem",
      subtitle: "Complete Quran with audio, translations & pronunciation",
      icon: Book_open,
      color: "green",
      features: [
        "Audio Recitation",
        "Pronunciation Guide",
        "Offline Download"
      ]
    },
    {
      title: "Sahih Bukhari & Muslim",
      subtitle: "Authentic Hadith with translations & audio",
      icon: File_text,
      color: "blue",
      features: [
        "Multi-language",
        "Audio Playback",
        "Offline Access"
      ]
    },
    {
      title: "Tirmidhi & Abu Dawud",
      subtitle: "Additional authentic Hadith collections",
      icon: File_text,
      color: "blue",
      features: [
        "Multi-language",
        "Audio Playback",
        "Offline Access"
      ]
    },
    {
      title: "Da'wah Communication Skills",
      subtitle: "Learn effective Islamic communication techniques",
      icon: Mic,
      color: "orange",
      features: [
        "Conversation Tips",
        "Body Language",
        "Active Listening"
      ]
    },
    {
      title: "Aqidah (Islamic Belief)",
      subtitle: "Fundamental beliefs with translations",
      icon: Tag,
      color: "purple",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Tawheed",
      subtitle: "Oneness of Allah with audio guides",
      icon: Plus,
      color: "green",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Prophet Muhammad (ﷺ)",
      subtitle: "Life and teachings with multimedia",
      icon: User,
      color: "orange",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Prophets & Messengers",
      subtitle: "Stories with translations & audio",
      icon: Users,
      color: "indigo",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Akhirah (Hereafter)",
      subtitle: "Afterlife concepts with translations",
      icon: Globe,
      color: "red",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Day of Judgement",
      subtitle: "Qiyamah details with audio guides",
      icon: Calendar,
      color: "yellow",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Islamic Ethics & Manners",
      subtitle: "Akhlaq with practical translations",
      icon: Book_open,
      color: "teal",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Divine Books",
      subtitle: "Scriptures comparison with audio",
      icon: File_text,
      color: "pink",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Common Misconceptions",
      subtitle: "Clarifications with translations",
      icon: Search,
      color: "gray",
      features: ["Multi-language", "Audio Support"]
    },
    {
      title: "Quran & Science",
      subtitle: "Scientific miracles with audio",
      icon: Globe,
      color: "cyan",
      features: ["Multi-language", "Audio Support"]
    }
  ];
  const apologeticsTools = [
    {
      title: "Common Objections",
      subtitle: "Prepared responses to frequent criticisms",
      icon: Search,
      color: "red"
    },
    {
      title: "Comparative Religion",
      subtitle: "Christianity, Judaism & other faiths",
      icon: Globe,
      color: "purple"
    },
    {
      title: "Scientific Evidence",
      subtitle: "Facts aligning with Islamic teachings",
      icon: Plus,
      color: "blue"
    },
    {
      title: "Historical Proofs",
      subtitle: "Evidence for Prophet & Quran authenticity",
      icon: Calendar,
      color: "orange"
    }
  ];
  const quickReferences = [
    {
      title: "Shahada",
      verse: "لا إله إلا الله محمد رسول الله",
      translation: "There is no god but Allah, Muhammad is His messenger"
    },
    {
      title: "Jesus in Quran",
      verse: "Quran 19:30-31",
      translation: "Jesus said: I am a servant of Allah..."
    },
    {
      title: "Peace",
      verse: "Quran 5:32",
      translation: "Whoever saves a life, it is as if he saved all mankind"
    },
    {
      title: "Tolerance",
      verse: "Quran 2:256",
      translation: "There is no compulsion in religion"
    }
  ];
  const smartSuggestions = [
    "What does Islam say about Jesus?",
    "Women rights in Islam",
    "Does Islam promote violence?",
    "What is the meaning of Jihad?"
  ];
  const emergencyKit = {
    title: "5-Minute Islam Overview",
    points: [
      "Islam means peace and submission to Allah",
      "Muslims believe in one God (Allah) and Prophet Muhammad",
      "Five Pillars: Shahada, Prayer, Charity, Fasting, Hajj",
      "Quran is the final revelation from God",
      "Day of Judgment and afterlife belief"
    ]
  };
  const misconceptionResponses = {
    "women": {
      title: "Women's Rights in Islam",
      points: [
        "Islam gave women rights 1400 years ago",
        "Right to education, property, work",
        "Hijab is for protection and dignity"
      ],
      verse: 'Quran 4:1 - "Honor women, they are your mothers, daughters, sisters"'
    },
    "terrorism": {
      title: "Islam and Violence",
      points: [
        "Islam means peace and submission",
        "Killing innocents is forbidden",
        "Jihad means struggle, not war"
      ],
      verse: 'Quran 5:32 - "Killing one person is like killing all humanity"'
    },
    "sharia": {
      title: "Sharia Law",
      points: [
        'Sharia means "path to water" - guidance',
        "Focuses on justice and mercy",
        "Protects life, family, property"
      ],
      verse: 'Quran 16:90 - "Allah commands justice and good conduct"'
    }
  };
  const quickSearchResults = [
    {
      type: "quran",
      source: "QURAN",
      title: "Quran 2:255 (Ayat al-Kursi)",
      content: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...",
      relevance: 95,
      translation: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
    },
    {
      type: "hadith",
      source: "Sahih Bukhari",
      title: "Bukhari 2736",
      content: 'The Prophet (ﷺ) said: "Islam is built on five pillars..."',
      relevance: 90,
      translation: "قال رسول الله صلى الله عليه وسلم: بني الإسلام على خمس"
    },
    {
      type: "hadith",
      source: "Sahih Muslim",
      title: "Muslim 1631",
      content: 'The Prophet (ﷺ) said: "The believer is not one who eats his fill while his neighbor goes hungry..."',
      relevance: 88,
      translation: "ليس المؤمن الذي يشبع وجاره جائع"
    }
  ];
  const locationData = {
    country: "United States",
    language: "English",
    culture: "Western, Individualistic",
    religion: "Christianity (65%), Non-religious (23%)",
    misconceptions: "Women's rights, Terrorism, Sharia Law",
    approach: "Focus on Jesus (AS) in Islam, Common values"
  };
  const nearbyMosques = [
    {
      name: "Islamic Center of Greater Cincinnati",
      distance: "2.3 km",
      address: "3990 Executive Dr"
    },
    {
      name: "Clifton Mosque",
      distance: "4.1 km",
      address: "2651 Clifton Ave"
    },
    {
      name: "West Chester Islamic Center",
      distance: "12.8 km",
      address: "9350 Cincinnati Columbus Rd"
    }
  ];
  const themeStyles = {
    container: {
      backgroundColor: "var(--bg-primary)",
      color: "var(--text-primary)"
    },
    card: {
      backgroundColor: "var(--bg-secondary)",
      borderColor: "var(--border-color)",
      color: "var(--text-primary)"
    },
    accent: {
      backgroundColor: "var(--bg-accent)",
      color: "var(--text-primary)"
    },
    input: {
      backgroundColor: "var(--bg-secondary)",
      borderColor: "var(--border-color)",
      color: "var(--text-primary)"
    },
    activeTab: {
      backgroundColor: "var(--color-active)",
      color: "#ffffff"
    },
    inactiveTab: { color: "var(--color-inactive)" },
    textPrimary: { color: "var(--text-primary)" },
    textSecondary: { color: "var(--text-secondary)" },
    textMuted: { color: "var(--text-muted)" },
    activeIcon: { color: "var(--color-active)" },
    inactiveIcon: { color: "var(--color-inactive)" }
  };
  function getSearchResponseKey() {
    const query = quickSearchQuery.toLowerCase();
    if (query.includes("women")) return "women";
    if (query.includes("terrorism")) return "terrorism";
    if (query.includes("sharia")) return "sharia";
    return null;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Balagh - Da'wah Toolkit</title>`;
      $$payload3.out += `<meta name="description" content="Islamic Da'wah Toolkit for sharing Islam"/>`;
    });
    $$payload2.out += `<div class="max-w-md mx-auto min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);"><div class="shadow-sm p-4 flex items-center justify-between" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="text-center"><h1 class="text-xl font-bold leading-tight" style="color: var(--text-primary);">Balagh</h1> <p class="text-sm opacity-75 font-arabic leading-none" style="color: var(--text-secondary);">بلاغ</p></div> <div class="flex items-center space-x-3 relative"><div class="relative"><button class="p-2 rounded-lg hover:opacity-70">`;
    Users($$payload2, {
      style: "color: var(--color-inactive);",
      size: 20
    });
    $$payload2.out += `<!----></button> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background-color: #ef4444;">2</div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="relative"><button class="p-2 rounded-lg hover:opacity-70">`;
    Settings($$payload2, {
      style: "color: var(--color-inactive);",
      size: 20
    });
    $$payload2.out += `<!----></button> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <button class="p-2 rounded-lg hover:opacity-70"${attr_style(activeTab === "profile" ? "background-color: var(--bg-accent);" : "")}>`;
    User($$payload2, {
      style: activeTab === "profile" ? "color: var(--color-active);" : "color: var(--color-inactive);",
      size: 20
    });
    $$payload2.out += `<!----></button></div></div> <div class="p-4 pb-20">`;
    if (activeTab === "home") {
      $$payload2.out += "<!--[-->";
      Home($$payload2, {
        languages,
        selectedLanguage,
        isOnline,
        theme,
        themeStyles,
        quickReferences,
        emergencyKit,
        get activeTab() {
          return activeTab;
        },
        set activeTab($$value) {
          activeTab = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (activeTab === "dawah") {
      $$payload2.out += "<!--[-->";
      Dawah($$payload2, {
        languages,
        theme,
        smartSuggestions,
        quickSearchResults,
        misconceptionResponses,
        getSearchResponseKey,
        get selectedLanguage() {
          return selectedLanguage;
        },
        set selectedLanguage($$value) {
          selectedLanguage = $$value;
          $$settled = false;
        },
        get audienceLanguage() {
          return audienceLanguage;
        },
        set audienceLanguage($$value) {
          audienceLanguage = $$value;
          $$settled = false;
        },
        get isOnline() {
          return isOnline;
        },
        set isOnline($$value) {
          isOnline = $$value;
          $$settled = false;
        },
        get quickSearchQuery() {
          return quickSearchQuery;
        },
        set quickSearchQuery($$value) {
          quickSearchQuery = $$value;
          $$settled = false;
        },
        get isRecording() {
          return isRecording;
        },
        set isRecording($$value) {
          isRecording = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (activeTab === "learn") {
      $$payload2.out += "<!--[-->";
      Learn($$payload2, {
        learningSections,
        apologeticsTools,
        theme,
        get learnSearchQuery() {
          return learnSearchQuery;
        },
        set learnSearchQuery($$value) {
          learnSearchQuery = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (activeTab === "location") {
      $$payload2.out += "<!--[-->";
      Location($$payload2, {
        locationData,
        nearbyMosques,
        get locationInput() {
          return locationInput;
        },
        set locationInput($$value) {
          locationInput = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (activeTab === "test") {
      $$payload2.out += "<!--[-->";
      Test($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (activeTab === "profile") {
      $$payload2.out += "<!--[-->";
      Profile($$payload2, {
        languages,
        get selectedLanguage() {
          return selectedLanguage;
        },
        set selectedLanguage($$value) {
          selectedLanguage = $$value;
          $$settled = false;
        },
        get isOnline() {
          return isOnline;
        },
        set isOnline($$value) {
          isOnline = $$value;
          $$settled = false;
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md border-t p-4" style="background-color: var(--bg-secondary); border-color: var(--border-color);"><div class="flex justify-around"><button class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"${attr_style(activeTab === "home" ? "background-color: var(--color-active); color: #ffffff;" : "color: var(--color-inactive);")}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" fill="currentColor"></path><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1"></circle></svg> <span class="text-xs mt-1 font-medium">Home</span></button> <button class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"${attr_style(activeTab === "dawah" ? "background-color: var(--color-active); color: #ffffff;" : "color: var(--color-inactive);")}>`;
    Mic($$payload2, { size: 24 });
    $$payload2.out += `<!----> <span class="text-xs mt-1 font-medium">Da'wah</span></button> <button class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"${attr_style(activeTab === "learn" ? "background-color: var(--color-active); color: #ffffff;" : "color: var(--color-inactive);")}>`;
    Book_open($$payload2, { size: 24 });
    $$payload2.out += `<!----> <span class="text-xs mt-1 font-medium">Learn</span></button> <button class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"${attr_style(activeTab === "location" ? "background-color: var(--color-active); color: #ffffff;" : "color: var(--color-inactive);")}>`;
    Map_pin($$payload2, { size: 24 });
    $$payload2.out += `<!----> <span class="text-xs mt-1 font-medium">Location</span></button> <button class="flex flex-col items-center py-3 px-3 rounded-lg transition-all shadow-lg"${attr_style(activeTab === "test" ? "background-color: var(--color-active); color: #ffffff;" : "color: var(--color-inactive);")}>`;
    Graduation_cap($$payload2, { size: 24 });
    $$payload2.out += `<!----> <span class="text-xs mt-1 font-medium">Test</span></button></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
