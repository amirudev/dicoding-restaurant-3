const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js');
  }
};

export default swRegister;
