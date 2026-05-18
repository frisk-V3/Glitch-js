let deg = 0;
setInterval(() => {
  deg += 0.05;
  document.querySelectorAll('*').forEach((el) => {
    if (el.children.length === 0 && el.textContent.trim().length > 0) {
      // テキスト文字をウネウネ波打たせる
      el.style.display = 'inline-block';
      el.style.transform = `translateY(${Math.sin(deg + el.textContent.length) * 15}px) rotate(${Math.cos(deg) * 10}deg)`;
    } else if (el.tagName === 'IMG' || el.tagName === 'BUTTON') {
      // 画像やボタンを個別にぐにゃぐにゃ回転・拡大縮小
      el.style.transform = `rotate(${Math.sin(deg) * 20}deg) scale(${Math.cos(deg) * 0.2 + 1})`;
    }
  });
  // 画面全体をゼリーのように歪ませる
  document.body.style.transform = `skewX(${Math.sin(deg) * 15}deg) skewY(${Math.cos(deg) * 5}deg)`;
}, 30);
