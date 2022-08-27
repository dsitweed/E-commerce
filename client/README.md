# Thông tin khái quát về client

## _Trang Admin_
### adminComponents
- topbar
- side bar
- widgetLg (Các thông tin bổ trợ)
- widgetSm (Các thông tin bổ trợ quản lý người đang sử dụng dịch vụ)
- featuredInfo (banner về doanh thu doanh số các kiểu)
### adminPages
- adminHome
- newProduct
- newUser
- product
- productList
- user
- useList
## _Trang user có thể nhìn và thao tác_
### userComponents
- navbar
- footer
- cta
- slideShow
- collectionItem
- collections
- productItem
- productCategory
- announcement (Những thông tin thông báo như giảm giá sốc bán giá gốc, sẽ làm banner chạy chữ theo thời gian) -- chưa hoàn thiện 
### userPages
- HomeUser
- productListUser
- singleProduct
- signIn
- signUp
- carts

## Những chú thích
### component CTA 
CTA là thuật ngữ viết tắt của Call to Action, cũng còn được biết là CTA button, nó được hiểu là nút kêu gọi hành động. 
### component chart
- Dùng linh hoạt giữa 2 bên admin và hiển thị cho user (ít sử dụng hơn)
### Có thể bổ sung newsletter trong những lần update tiếp theo
Định nghĩa: Newsletter hay còn gọi là bản tin Email là một Email được gửi định kỳ bởi cá nhân hoặc doanh nghiệp có chứa tin tức, nội dung cập nhật về một chủ đề nhất định mà người dùng đã đăng ký từ trước đó.
- Tóm lại: là Website sẽ gửi những email marketing tới email người dùng đăng ký

## Các tool sử dụng để tạo điểm nhấn cho front end
- Tạo dải màu - gradient : https://www.w3schools.com/colors/colors_gradient.asp
- Tạo box shadow: https://html-css-js.com/css/generator/box-shadow/
```
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
```


# Những điểm có thể update:

- Ô nhập số lượng ở singleProduct có thể không cần ấn dấu + hoặc - mà có thể xóa và nhập trực tiếp trong khoảng giá trị (min - max có thể)
