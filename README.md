# react-masonry

react瀑布流

哒哒哒：
![酱紫的](./readme.png)


### 目录
- src：页面代码
- components：瀑布流组件

### 使用

传三个参数：
- column: 显示多少行
- list：数据
- renderItem：渲染的每一个item组件

```
<Masonry column={3} list={list} renderItem={renderItem} />
```