import React from 'react'
import Swiper from '../../components/Swiper/Swiper';
import styles from './Product.scss'
function Product() {
  return (
	 <main>
		<div className="main__container container">
			<div className="main__product-wrapper">
				<div className="main__product-element">
					<div className="main__product-swiper">
						<Swiper/>
					</div>
					<div className="main__product-description">
						
					</div>
				</div>
			</div>
		</div>
	 </main>
  )
}

export default Product;