from turtle import *

import turtle as tur

tur.Screen().bgcolor("cyan")



#we want to paint castle



speed(30)
width(7)
color("grey")

begin_fill()

penup()
goto(0, -230)
pendown()

forward(500)

left(90)
forward(400)



left(90)
forward(20)

left(90)
forward(20)

right(90)
forward(20)

right(90)
forward(20)

left(90)
forward(20)

left(90)
forward(20)

right(90)
forward(20)

right(90)
forward(20)

left(90)
forward(20)

left(90)
forward(20)

forward(70)
right(90)

forward(330)
right(90)

forward(80)
left(40)

forward(125)
left(100)

forward(125)

left(40)
forward(80)

right(90)
forward(330)

right(90)
forward(90)



left(90)
forward(20)

left(90)
forward(20)

right(90)
forward(20)

right(90)
forward(20)

left(90)
forward(20)

left(90)
forward(20)

right(90)
forward(20)

right(90)
forward(20)

left(90)
forward(20)

left(90)


forward(400)

left(90)
forward(520)

end_fill()

color("green")

begin_fill()

penup()
goto(700, -230)
pendown()

right(90)
forward(300)

right(90)
forward(1400)

right(90)
forward(300)

right(90)
forward(1400)


end_fill()


penup()
goto(75, 160)
pendown()

color("red")


begin_fill()

left(130)
forward(130)

left(100)
forward(130)

left(130)
forward(165)

end_fill()


color("brown")

begin_fill()

penup()
goto(0, -50)
pendown()

forward(70)
right(90)

forward(175)
right(90)

forward(140)
right(90)

forward(175)
right(90)

forward(70)

end_fill()

penup()
goto(-20, 50)
pendown()

import turtle


t_cir=turtle.Turtle()

t_cir.color("light blue")

t_cir.begin_fill()

t_cir.penup()
t_cir.goto(-10, 70)
t_cir.pendown()

t_cir.circle(30)

t_cir.end_fill()



exitonclick()