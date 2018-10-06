import React from 'react'
// import { css } from 'emotion'

export default function TextFields (props) {
  const formSection = ` `
  const sectionTitle = ` `

  const sectionBody = ` `
  return (
    <React.Fragment>
      <div className={formSection}>
        <div className={sectionTitle}>
          معلومات المتبرع
        </div>
        <div className={sectionBody}>
          <div>
            <span> الإسم الكامل</span>
            <input
              type='text'
              name='fullName'
              value={props.values.fullName}
              onChange={props.onChange}
            />
          </div>
          <div>
            <span>رقم الهوية</span>
            <input
              type='text'
              name='nationalID'
              value={props.values.nationalID}
              onChange={props.onChange}
            />
          </div>
          <div>
            <span>الجنس</span>
            <input
              type='text'
              name='gender'
              value={props.values.gender}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>

      {/*
        *  Section # 2
      */}

      <div className={formSection}>
        <div className={sectionTitle}>
          العنوان
        </div>
        <div className={sectionBody}>
          <div>
            <span>العنوان</span>
            <input
              type='text'
              name='address'
              value={props.values.address}
              onChange={props.onChange}
            />
          </div>
          <div>
            <span>صندوق البريد</span>
            <input
              type='text'
              name='postalBox'
              value={props.values.postalBox}
              onChange={props.onChange}
            />
          </div>
          <div>
            <span>الرمز البريدي</span>
            <input
              type='text'
              name='postalCode'
              value={props.values.postalCode}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>

      {/*
        *  Section # 3
      */}

      <div className={formSection}>
        <div className={sectionTitle}>
          معلومات الاتصال
        </div>
        <div className={sectionBody}>
          <div>
            <span>البريد الالكتروني</span>
            <input
              type='text'
              name='email'
              value={props.values.email}
              onChange={props.onChange}
            />
          </div>
          <div>
            <span>رقم التواصل</span>
            <input
              type='text'
              name='contactNumber'
              value={props.values.contactNumber}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
