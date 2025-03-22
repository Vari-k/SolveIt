// Register service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/static/service-worker.js")
      .then(reg => console.log("Service Worker registered:", reg.scope))
      .catch(err => console.error("Service Worker registration failed:", err));
  }
  