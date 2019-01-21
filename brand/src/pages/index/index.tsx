import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Icon, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

// #region 书写注意
// 
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }

// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
//   // handleAdd: () => any
// }

// type PageOwnProps = {}

// type PageState = {}

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// interface Index {
//   props: IProps;
//   // handleAdd: () => {};
// }

interface HomeProps {

}

interface HomeState {
  data: any[]
}
// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add() {
//     dispatch(add())
//   },
//   dec() {
//     dispatch(minus())
//   },
//   asyncAdd() {
//     dispatch(asyncAdd())
//   }
// }))
export default class Index extends Taro.Component<HomeProps, HomeState> {

  /**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      data: [
        {
          name: '凯路威',
          model: '2018款2.0TSI',
          
          seats: '七座',

        }
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      // <View className='index'>
      //   <Button className='add_btn' onClick={this.props.add}>+</Button>
      //   <Button className='dec_btn' onClick={this.props.dec}>-</Button>
      //   <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
      //   <View><Text>{this.props.counter.num}</Text></View>
      //   <View><Text>Hello, World</Text></View>
      // </View>
      <View className='app-contrast'>
        <View className='app-contrast_header'>
          <View className='features'>
            隐藏功能
          </View>
          <View className='app-tabs'>
            <View className='app-tab'>
              <View className='name'>凯路威 2018款2.0TSI 四驱舒适版 7座</View>
              <View className='price'>
                <Text>36.38万</Text>
                <Icon size='14' type='search' color='#ccc' />
              </View>
              <View className='move'>钉在左侧</View>
            </View>
            {/* add */}
            <View className='app-tab' onClick={this.handleAdd}>
              <View className='add'>+</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  handleAdd = (): void => {
    console.log('add')
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

// export default Index as ComponentClass<HomeProps, PageState>
