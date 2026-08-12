'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CartPage.module.css';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/GuaranteeBadge';
import CTAAndBenefitsBanner from '@/components/CTAAndBenefitsBanner';
import { cartUpsellProducts } from '@/data/cart';

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    itemsCount,
    freeShippingProgress,
    addToCart,
  } = useCart();

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your Shopping Cart ({itemsCount})</h1>

        {/* Free Shipping Banner */}
        <div className={styles.shippingBanner}>
          <div className={styles.shippingText}>
            {freeShippingProgress.isEligible ? (
              <span>🎉 You unlocked <strong>FREE Shipping</strong> on this order!</span>
            ) : (
              <span>Add <strong>${freeShippingProgress.needed.toFixed(2)}</strong> more to get <strong>FREE Shipping</strong></span>
            )}
          </div>
          <div className={styles.progressTrack}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${freeShippingProgress.percentage}%` }} 
            />
          </div>
        </div>

        {cart.length > 0 ? (
          <div className={styles.cartGrid}>
            {/* Left Column: Cart Items Table */}
            <div className={styles.itemsColumn}>
              <div className={styles.tableHeader}>
                <span>Product</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              <div className={styles.tableBody}>
                {cart.map((item) => (
                  <div key={item.id} className={styles.cartRow}>
                    <div className={styles.productCell}>
                      <div className={styles.imageWrap}>
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className={styles.itemImage} 
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        {item.variantTitle && (
                          <span className={styles.variantTitle}>{item.variantTitle}</span>
                        )}
                        <span className={styles.unitPrice}>${item.price.toFixed(2)} each</span>
                        <button 
                          className={styles.removeLink} 
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className={styles.quantityCell}>
                      <div className={styles.quantityStepper}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={styles.qtyBtn}
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={styles.qtyBtn}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className={styles.totalCell}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Upsell / Recommended Additions */}
              <div className={styles.upsellSection}>
                <h3 className={styles.upsellHeading}>Recommended Additions</h3>
                <div className={styles.upsellGrid}>
                  {cartUpsellProducts.map((p) => (
                    <div key={p.id} className={styles.upsellCard}>
                      <div className={styles.upsellImgWrap}>
                        <Image src={p.image} alt={p.title} fill className={styles.upsellImg} />
                      </div>
                      <div className={styles.upsellInfo}>
                        <h4>{p.title}</h4>
                        <span>${p.price.toFixed(2)}</span>
                        <button 
                          className={styles.addUpsellBtn}
                          onClick={() => addToCart({ id: p.id, title: p.title, price: p.price, image: p.image })}
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Summary Card */}
            <div className={styles.summaryColumn}>
              <div className={styles.summaryCard}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span className={styles.summaryAmount}>${subtotal.toFixed(2)}</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{freeShippingProgress.isEligible ? 'FREE' : 'Calculated at checkout'}</span>
                </div>

                <hr className={styles.divider} />

                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Estimated Total</span>
                  <span className={styles.totalAmount}>${subtotal.toFixed(2)}</span>
                </div>

                <button 
                  className={styles.checkoutBtn}
                  onClick={() => alert('Proceeding to Checkout demo...')}
                >
                  Proceed to Checkout — ${subtotal.toFixed(2)}
                </button>

                <button 
                  className={styles.shopPayBtn}
                  onClick={() => alert('Shop Pay checkout demo...')}
                >
                  Buy with Shop Pay
                </button>

                <div className={styles.guaranteeWrap}>
                  <GuaranteeBadge />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>Your cart is currently empty</h2>
            <p>Looks like you haven&apos;t added any baby monitor products yet.</p>
            <Button href="/products/petit">Shop Petit Monitor</Button>
          </div>
        )}
      </div>

      <CTAAndBenefitsBanner hideBanner={true} />
    </div>
  );
}
