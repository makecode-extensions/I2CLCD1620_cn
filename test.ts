let item = 0
I2C液晶1602.液晶初始化(63)
I2C液晶1602.显示字符串("Hello", 0, 0)
basic.pause(1000)
I2C液晶1602.清除液晶()
item = 0
basic.forever(() => {
    item += 1
    I2C液晶1602.显示数字(item, 0, 0)
    basic.pause(1000)
})
