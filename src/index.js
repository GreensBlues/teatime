const teas = ["Earl Grey", "Oolong", "Genmaicha"];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default {
  async fetch() {
    const tea = randomItem(teas);

    return new Response(
      `🍵 TEATIME | Tea: ${tea}`,
      {
        headers: {
          "Content-Type": "text/plain; charset=UTF-8"
        }
      }
    );
  }
};
