# Mega menu

## Cài đặt

### 1. Cài đặt chung

1. Tạo thư mục project

```
Mega-menu
  static
  tailwind
  README.MD
```

2. Chạy lệnh cài đặt tailwind

```
npx tailwindcss-cli@latest init
```

3. Config file tailwind.config.js

```
variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
```

4. Tạo file tailwind.custom.css trong folder tailwind

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Build file tailwind.css

```
npx tailwindcss-cli@latest build tailwind.custom.css -c tailwind.config.js -o ../static/tailwind.css
```

### 2. Cài đặt google font

1. lên trang fonts.google.com chọn font mà mình cần

2. Copy link font và bỏ vào file index.html

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
  rel="stylesheet"
/>
```

3. Config lại file tailwind.config.js

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
    },
  },
};
```

4. Chạy lệnh build lại file tailwind

```bash
npx tailwindcss-cli@latest build tailwind.custom.css -c tailwind.config.js -o ../static/tailwind.css
```

5. Dùng class font-sans tại thẻ body

```html
<body class="h-screen bg-gray-300 font-sans"></body>
```

## Class cho thẻ nav

```html
<nav class="bg-black text-white"></nav>
```

Nền đen, chữ trắng
![Screenshot](1.png)

## Class cho thẻ chứa toàn bộ menu
