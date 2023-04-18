### Original Intention

When using native Android apps, if you're in the root view of the Tab and hit the virtual Back button, you'll get a toast prompt that says "Press again to quit the app". When we're developing in `React Native` and using `react-navigation` to manage navigation, hitting the virtual Back key actually takes us to `Stack.Navigator`. To achieve the same effect, `react-native-root-back-behavior` was created.

### Usage

Call it from within the `rootScreen` function:

```
import useRootBackBehavior from 'react-native-root-back-behavior'

const RootNavigator = () => {
  // add here, if omitted the param, the default is '再按一次退出应'.
  useRootBackBehavior()

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" options={{ title: '首页' }} component={HomePage} />
      <Tab.Screen name="Explore" options={{ title: '发现' }} component={ExplorePage} />
      <Tab.Screen name="LittleWorld" options={{ title: '小世界' }} component={LittleWorldPage} />
      <Tab.Screen name="Message" options={{ title: '消息' }} component={MessagePage} />
      <Tab.Screen name="Profile" options={{ title: '我的' }} component={ProfilePage} />
    </Tab.Navigator>
  )
}
```

---



### 初衷

在使用原生Android应用的时候，如果你处于 Tab 的根视图页面，点击虚拟返回按键时，会吐司提示"再按一次退出应用"。而当我们用 `React Native` 开发，使用 `react-navigation` 管理导航，点按虚拟返回键实际上是跳到上级 `Stack.Navigator`。为了达到同样的效果，于是就有了 `react-native-root-back-behavior`。

### 使用

在 `rootScreen` 的函数里调用即可:

```javascript
import useRootBackBehavior from 'react-native-root-back-behavior'

const RootNavigator = () => {
  // 加在这里,如果忽略参数, 默认是'再按一次退出应用'
  useRootBackBehavior()

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" options={{ title: '首页' }} component={HomePage} />
      <Tab.Screen name="Explore" options={{ title: '发现' }} component={ExplorePage} />
      <Tab.Screen name="LittleWorld" options={{ title: '小世界' }} component={LittleWorldPage} />
      <Tab.Screen name="Message" options={{ title: '消息' }} component={MessagePage} />
      <Tab.Screen name="Profile" options={{ title: '我的' }} component={ProfilePage} />
    </Tab.Navigator>
  )
}
```
