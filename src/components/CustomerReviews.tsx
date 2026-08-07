import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, MessageSquareQuote, CheckCircle2, User, Send, ThumbsUp } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Rajshahi');
  const [newCar, setNewCar] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      name: newName,
      location: newLocation,
      carModel: newCar || 'Toyota Car Owner',
      rating: newRating,
      comment: newComment,
      date: 'Just Now',
      serviceTaken: 'Car Service & Detailing'
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setNewName('');
      setNewCar('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-[#181818] text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="editorial-tag">Trusted By Rajshahi Car Owners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Customer <span className="font-editorial italic font-normal text-[#C1121F]">Reviews</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Read authentic feedback from car buyers, doctors, engineers, and vehicle owners across Rajshahi who trust Arshi Automobile & Car Hub.
          </p>
        </div>

        {/* Testimonial Cards Grid (3 Cards as requested) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#222222] rounded-3xl p-8 border border-stone-800 shadow-xl hover:shadow-2xl hover:border-[#C1121F] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-8 h-8 text-[#C1121F]/30" />
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-sm italic leading-relaxed font-sans">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-stone-800 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#C1121F] text-white flex items-center justify-center font-bold font-display text-base shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-display text-white text-base">{testimonial.name}</h4>
                  <p className="text-xs text-[#C1121F] font-semibold">{testimonial.carModel}</p>
                  <p className="text-[11px] text-stone-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review button trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-[#1F1F1F] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center space-x-2 mx-auto"
          >
            <ThumbsUp className="w-4 h-4 text-[#C1121F]" />
            <span>{showForm ? 'Close Feedback Form' : 'Share Your Experience'}</span>
          </button>
        </div>

        {/* Review Submission Form */}
        {showForm && (
          <div className="mt-8 max-w-xl mx-auto bg-[#F7F7F7] p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xl space-y-4 animate-fadeIn">
            <h3 className="text-xl font-bold font-display text-stone-900 text-center">
              Submit Your Review
            </h3>

            {submitted ? (
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-2xl text-center font-bold text-sm">
                Thank you! Your feedback has been published.
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asif Chowdhury"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Car Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota Allion"
                      value={newCar}
                      onChange={(e) => setNewCar(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                    >
                      <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                      <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                      <option value={3}>3 Stars ⭐⭐⭐</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Review Details *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write your experience about car wash, servicing, or car purchase..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C1121F] text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-[#9E0E18] transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Publish Review</span>
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
