if (typeof window === 'undefined') {
  void (async () => {
    const { server } = await import('./server');
    server.listen();
    console.log('server start: ', Date.now());
  })();
} else {
  void (async () => {
    const { worker } = await import('./browser');
    worker.start();
    console.log('worker start: ', Date.now());
  })();
}

export {};
