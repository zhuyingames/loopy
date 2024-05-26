class Loopy {
  static run(callback) {
    let record = 0;
    const loop = (time) => {
      if (record === 0) record = time;
      const dt = (time - record) / 1000;
      record = time;
      if (callback && typeof callback === "function" && callback(dt))
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
  }
}
