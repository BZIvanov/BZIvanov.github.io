enum GenderOptions {
  MALE,
  FEMALE,
}

function printCity(city: string, gender: GenderOptions) {
  if (gender === GenderOptions.MALE) {
    console.log('He is from ' + city);
  } else {
    console.log('She is from ' + city);
  }
}

printCity('Sofia', GenderOptions.MALE);
