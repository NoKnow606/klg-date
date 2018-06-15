/**
 *
 * Created by nick on 2017/3/22.
 */
import * as moment from 'moment-timezone'
import {DurationInputArg1, unitOfTime} from 'moment-timezone'

moment.tz.setDefault('Asia/Shanghai')

export class DateUtil {

  /**
   * 拿到凌晨时间
   * @param date
   * @param days 天数加减
   * @returns {Date}
   */
  static getDayStart (date = new Date(), days = 0) {
    return moment(date || new Date()).startOf('day').add(days, 'day').toDate()
  }

  /**
   * 计算两个时间的差值
   * @param from
   * @param to 默认是当前日期
   * @param type 类型 默认是天
   * @returns {Number}
   */
  static diff (from, to = new Date(), type: unitOfTime.Diff = 'day') {
    if (!from) return 0
    if (type === 'day') {
      from = moment(from).startOf('day').toDate()
      to = moment(to).startOf('day').toDate()
    }
    return moment(to).diff(from, type)
  }

  static addDay (date = new Date(), days = 0) {
    return moment(date || new Date()).add(days, 'day').toDate()
  }

  static addMonth (date = new Date(), months = 0) {
    return this.add(date, months, 'month')
  }

  static add (date = new Date(), amount: DurationInputArg1 = 0, unit: unitOfTime.DurationConstructor = 'day') {
    return moment(date || new Date()).add(amount, unit).toDate()
  }

  static format (date = null, format = 'YYYY-MM-DD') {
    return moment(date || new Date()).format(format)
  }

  static compare (date1, date2 = new Date()) {
    return moment(date1).diff(date2, 'seconds')
  }
}

