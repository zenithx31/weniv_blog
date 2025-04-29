const menu = document.getElementById('menu');

// 메뉴 구조
menu.innerHTML = `
  <div class="relative group">
    <a href="about.html" class="hover:underline block px-4 py-2">About</a>
  </div>

  <div class="relative group">
    <a href="blog.html" class="hover:underline block px-4 py-2">Blog</a>
    <div class="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 rounded-lg z-10">
      <a href="blog.html#tech-news" class="block px-4 py-2 hover:bg-gray-100">Tech News</a>
      <a href="blog.html#programming-languages" class="block px-4 py-2 hover:bg-gray-100">Programming Languages</a>
      <a href="blog.html#data-engineering" class="block px-4 py-2 hover:bg-gray-100">Data Engineering</a>
      <a href="blog.html#blockchain-development" class="block px-4 py-2 hover:bg-gray-100">Blockchain Development</a>
      <a href="blog.html#cs-more" class="block px-4 py-2 hover:bg-gray-100">CS & More</a>
    </div>
  </div>
`;
