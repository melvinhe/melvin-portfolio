const salutations = () => {
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

export default salutations;