

function wait_and_print(text) {
  console.log('started waiting');

  function print_it(name) {
    console.log(text, name);
  }

  setTimeout(print_it, 3000, ['murat']);
  
}


wait_and_print("ssuuup");