# I2C液晶1602

makecode I2C 液晶 1602 软件包  

作者: shaoziyang  
日期:   2018.Mar  
  
![](https://raw.githubusercontent.com/microbit-makecode-packages/I2CLCD1620_cn/master/lcd.jpg)

## 使用方法

打开 makecode 编辑器，在项目中选择添加软件包，然后在地址栏输入下面网址  

https://github.com/microbit-makecode-packages/I2CLCD1620_cn  

搜索后就可以添加并使用本软件包了。

## I2C 地址
有两种I2C液晶模块，它们的地址不相同：    
- PCF8574: 39  
- PCF8574A: 63  

## API

- **液晶初始化**(address: number)  
初始化 LCD  
address: I2C 地址  

- **显示数字**(n: number, x: number, y: number)  
在液晶的指定位置显示数字。  
n: 数字  
x: 液晶X轴坐标, [0 - 15]  
y: 液晶Y轴坐标, [0 - 1]  

- **显示字符串**(s: string, x: number, y: number)  
在液晶指定位置显示字符串show a string in LCD at given position.  
s: 将要显示的英文字符串  
x: 液晶X轴坐标, [0 - 15]  
y: 液晶Y轴坐标, [0 - 1]  

- **打开液晶**()  
打开液晶的显示功能

- **关闭液晶**()  
关闭液晶  

- **清除液晶**()  
清除液晶显示的内容  

- **打开液晶背光**()  
打开液晶的背光灯  

- **关闭液晶背光**()  
关闭液晶的背光灯  

## 演示

![](https://raw.githubusercontent.com/microbit-makecode-packages/I2CLCD1620_cn/master/demo.jpg)

## 授权方式

MIT

microbit/micropython 中文社区版权所有 (c) 2018  

## 支持硬件

* for PXT/microbit


[来自 microbit/micropython 中文社区](http://www.micropython.org.cn)
