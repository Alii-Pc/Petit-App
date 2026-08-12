'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CartDrawer.module.css';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/GuaranteeBadge';
import { Icon } from '@/components/ui/Icon';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    itemsCount,
    freeShippingProgress,
  } = useCart();

  const [noteOpen, setNoteOpen] = useState(false);
  const [orderNote, setOrderNote] = useState('');

  if (!isCartOpen) return null;

  return (
    <>
      {/* Background Dimmed Overlay */}
      <div 
        className={styles.overlay} 
        onClick={() => setIsCartOpen(false)} 
        aria-hidden="true" 
      />

      {/* Slide-Out Drawer Panel */}
      <aside className={styles.drawer}>
        {/* 1. Drawer Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleWrap}>
            <h2 className={styles.title}>Your cart</h2>
            {itemsCount > 0 && <span className={styles.countBadge}>({itemsCount})</span>}
          </div>
          <button 
            className={styles.closeBtn} 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        {/* 3. Items List or Empty State */}
        <div className={styles.body}>
          {cart.length > 0 ? (
            <div className={styles.itemsList}>
              {cart.map((item) => (
                <div key={item.id} className={styles.itemRow}>
                  <div className={styles.itemImageWrap}>
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className={styles.itemImage} 
                    />
                  </div>

                  <div className={styles.itemDetails}>
                    <div className={styles.itemTopRow}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <button 
                        className={styles.removeBtn} 
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        🗑
                      </button>
                    </div>

                    {item.variantTitle && (
                      <span className={styles.variantText}>{item.variantTitle}</span>
                    )}

                    <div className={styles.itemBottomRow}>
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

                      <div className={styles.itemPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Order Note Accordion */}
              <div className={styles.noteAccordion}>
                <button 
                  className={styles.noteToggle} 
                  onClick={() => setNoteOpen(!noteOpen)}
                >
                  <span>📝 Add Order Note</span>
                  <span>{noteOpen ? '−' : '+'}</span>
                </button>
                {noteOpen && (
                  <textarea 
                    className={styles.noteTextarea} 
                    placeholder="Special instructions for your order..."
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    rows={3}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3 className={styles.emptyTitle}>Your cart is empty</h3>
              <button 
                className={styles.continueShoppingBtn} 
                onClick={() => setIsCartOpen(false)}
              >
                Continue shopping
              </button>
              
              <div className={styles.emptyDivider}></div>
              
              <div className={styles.emptyAccountPrompt}>
                <p>Have an account?</p>
                <p>
                  <Link href="/login" onClick={() => setIsCartOpen(false)} className={styles.emptyLoginLink}>
                    Log in
                  </Link> to check out faster.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. Drawer Footer */}
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>Subtotal</span>
              <span className={styles.subtotalAmount}>${subtotal.toFixed(2)}</span>
            </div>
            <p className={styles.taxesNotice}>
              Taxes and shipping calculated at checkout
            </p>

            <div className={styles.checkoutActions}>
              <button 
                className={styles.checkoutBtn}
                onClick={() => alert('Proceeding to Checkout demo...')}
              >
                Checkout — ${subtotal.toFixed(2)}
              </button>
              
              <button 
                className={styles.shopPayBtn}
                onClick={() => alert('Shop Pay checkout demo...')}
              >
                Buy with Shop Pay
              </button>
            </div>

            <div className={styles.viewCartLinkWrap}>
              <Link 
                href="/cart" 
                className={styles.viewCartLink}
                onClick={() => setIsCartOpen(false)}
              >
                View Full Cart Page →
              </Link>
            </div>

            <div className={styles.guaranteeRow}>
              <GuaranteeBadge />
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
