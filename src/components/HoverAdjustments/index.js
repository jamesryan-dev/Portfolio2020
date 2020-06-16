export const HoverAdjustments = (theme, props) => {
  if (theme.label === 'nightMode') {
    console.log('hover theme: ', theme)
    return `
      &:hover {}
    `
  } else {
    console.log('hover theme: fail', theme)
    return `
      &:hover {
      color: white !important;
      // transition: none;
    }
    ul, li {
      transition: none;
    }
    `
  }
}
