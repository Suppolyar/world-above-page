import { initCookies } from "@/coockies.js";

export const init = () => {
  const GEMS = window.__GEMS || {};
  window.__GEMS = {
    ...GEMS,
    no_header: true,
    enable_analytics: true,
    client_id: "store.my.games",
  };

  const script = document.createElement("script");
  script.src = "//store.my.games/hotbox/leela/header.js";
  document.head.appendChild(script);
  
  initCookies()

  // Подключение 1Link
  const initOneLink = () => {
    var partnerScript = document.createElement('script');
    partnerScript.type = 'text/javascript';
    partnerScript.async = true;
    partnerScript.src = '//1l-hit.my.games/v1/hit/104447.js?r=' + encodeURIComponent(document.referrer) + '&l=' + encodeURIComponent(window.location.href) + '&u=' + encodeURIComponent(0) + '&rnd=' + Math.random();
      var firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(partnerScript, firstScript);
  };
  
  initOneLink();
  function _appendScript(script) {
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  function _createScript(host, id, pers_id = "") {
    const partnerScript = document.createElement("script");

    partnerScript.type = "text/javascript";
    partnerScript.async = true;
    partnerScript.referrerPolicy = "no-referrer-when-downgrade";
    partnerScript.src =
      `//${host}/v1/hit/${id}.js?` +
      "r=" +
      encodeURIComponent(document.referrer) +
      "&l=" +
      encodeURIComponent(window.location.href) +
      "&u=" +
      encodeURIComponent(pers_id) +
      "&rnd=" +
      Math.random();

    return partnerScript;
  }
  const OneLink = ({ id_param = "", pers_id = "" }) => {
    const isVk = window.location.hostname === "vkplay.ru";

    if (id_param === "") return;

    const host = isVk ? "1l-hit.vkplay.ru" : "1l-hit.my.games";

    if (Array.isArray(id_param)) {
      id_param.forEach((counter_id) => {
        _appendScript(_createScript(host, counter_id, pers_id));
      });
    } else {
      _appendScript(_createScript(host, id_param, pers_id));
    }
  };

  const setOnelink = () => OneLink({ id_param: "104482", pers_id: 0 });
  setOnelink();

  const _tmr = window._tmr || (window._tmr = []);
  _tmr.push({ id: "3268158", type: "reachGoal", goal: "downloadinstaller" });
};
