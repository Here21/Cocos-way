#UI系统介绍
UI基本元素，Sprite精灵（渲染节点）、Label文字

Sprite，九宫格切分

Label——overflow排版，SHRINK（自动缩小）、CLAMP（截断）、RESIZE_HIGHT（高度自适应）

Widget（自动对齐挂件）实现多分辨率自适应排版的基础，子节点与父节点的关系

Layout（自动布局）自动排列容器内的子节点，resize——container，内容自适应

##Practice_01 基本组件与自动布局
使用Sprite，Label，Widget，Layout，实现让动物们自适应排列

想要适配多分辨率，可以使用Widget组件并设置参数为百分比，这样适配的效果会好一点。


