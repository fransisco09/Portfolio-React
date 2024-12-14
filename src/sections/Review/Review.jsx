import React from 'react';
import styles from './ReviewStyles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../../assets/slide/slide_1.jpg';
import slide_image_2 from '../../assets/slide/slide_2.jpg';
import slide_image_3 from '../../assets/slide/slide_3.jpg';
import slide_image_4 from '../../assets/slide/slide_4.jpg';

function Review() {
    return (
        <section
            id="Review"
            className={styles.container}
        >
            <h1 className={styles.heading}>Flower Gallery</h1>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: `.${styles.swiperPagination}`, clickable: true }}
                navigation={{
                    nextEl: `.${styles.swiperButtonNext}`,
                    prevEl: `.${styles.swiperButtonPrev}`,
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiperContainer}
            >
                <SwiperSlide>
                    <img
                        src={slide_image_1}
                        alt="First_image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_2}
                        alt="Second Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_3}
                        alt="Third Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_4}
                        alt="Fourth Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_4}
                        alt="Fourth Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_4}
                        alt="Fourth Image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_4}
                        alt="Fourth Image"
                    />
                </SwiperSlide>
                <div className={styles.sliderController}>
                    <div className={styles.swiperButtonPrev}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className={styles.swiperButtonNext}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className={styles.swiperPagination}></div>
                </div>
            </Swiper>
        </section>
    );
}

export default Review;
