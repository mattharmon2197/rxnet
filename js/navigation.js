function isMobileDevice() {
  return (
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)
    || window.innerWidth <= 768
  );
}

function goHome() {
  if (isMobileDevice()) {
    window.location.href = "https://mattharmon2197.github.io/rxnet/mobile.html";
  } else {
    window.location.href = "https://mattharmon2197.github.io/rxnet/index.html";
  }
}
