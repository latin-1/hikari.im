const usePageTitle = (title?: string) => {
  if (title !== undefined) {
    document.title = `${title} - Hikari Hayashi`;
  } else {
    document.title = `Hikari Hayashi`;
  }
};

export { usePageTitle };
