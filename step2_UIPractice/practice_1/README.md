# UI系统介绍
常用UI基本元素，Sprite精灵（渲染节点）、Label文字

**Sprite**，需要了解九宫格切分，而**Label**文字，则需要熟悉overflow属性——**SHRINK**（自动缩小）、**CLAMP**（截断）、**RESIZE_HIGHT**（高度自适应）这些基本排版。

**Widget**（自动对齐挂件）可以在节点上使用此组件，实现多分辨率自适应排版的基础，要需要通过练习来熟悉使用Widget组件后，**子节点与父节点的关系**。

**Layout**（自动布局）自动排列容器内的子节点，resize——container，内容自适应。

想要适配多分辨率，可以使用Widget组件并设置参数为百分比，这样适配的效果会好一点。当然也要考虑图片的实际情况，并使用**九宫格切分**。

## 练习一：使用基本元素完成如图示例

![practice_01_demo](/cocos-way/gif/practice_01.gif)

基本要求，在不同尺寸的设备上，正常显示。

我的思路：使用Layout组件，把背景图片映射到Sprite Frame作公告板，Layout为父元素，Label作为子元素，结合Widget组件与overflow属性去做内容的自适应。


