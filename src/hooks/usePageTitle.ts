const usePageTitle = (title?: string) => {
  if (title) {
    document.title = `${title} - Hikari Hayashi`;
  } else {
    document.title = `Hikari Hayashi`;
  }
};

export { usePageTitle };
