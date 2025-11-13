import qrcode

file_path="D:\\Profile\\qrcode.png"
link='https://d-barua.github.io/My_Profile/'

qr = qrcode.QRCode()
qr.add_data(link)

img= qr.make_image()
img.save(file_path)
