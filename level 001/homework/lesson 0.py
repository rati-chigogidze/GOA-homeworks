from turtle import *


#we want to paint a house


#step 1:  draw a square

speed(30)
width(7)
color("purple")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)

forward(120)    #height of the door
right(90)

forward(60)
right(90)

forward(120)
end_fill()

#end of door

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()

right(150)
forward(200)

left(120)
forward(200)

end_fill()

#end of roof

#drawing left window

penup()
goto(40, 60)
pendown()


color("light blue")
begin_fill()
left(120)
forward(10)

left(90)
forward(40)

left(90)
forward(35)

left(90)
forward(40)

left(90)
forward(35)


#end of left window


#drawing right window

penup()
goto(150, 60)
pendown()

forward(35)
left(90)

forward(40)
left(90)

forward(35)
left(90)

forward(40)
left(90)
end_fill()

#end of right window


#house is done



exitonclick()