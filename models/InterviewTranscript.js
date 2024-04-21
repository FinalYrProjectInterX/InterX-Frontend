const mongoose = require('mongoose');

const InterviewTranscriptSchema = new mongoose.Schema({
    user_id: {
        type: String,
        default: ''
    },
    interview_name: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    subCategory: {
        type: String,
        default: ''
    },
    optional_subject: {
        type: String,
        default: ''
    },
    gap_years: {
        type: String,
        default: ''
    },
    year_of_interview: {
        type: String,
        default: ''
    },
    specialization: {
        type: String,
        default: ''
    },
    work_experience: {
        type: String,
        default: ''
    },
    exam_scores: {
        type: String,
        default: ''
    },
    visa_type: {
        type: String,
        default: ''
    },
    country_applied_for_visa: {
        type: String,
        default: ''
    },
    purpose_of_travel: {
        type: String,
        default: ''
    },
    programming_languages: {
        type: String,
        default: ''
    },
    tech_stack_used: {
        type: String,
        default: ''
    },
    branch: {
        type: String,
        default: ''
    },
    commision_type: {
        type: String,
        default: ''
    },
    bank_name: {
        type: String,
        default: ''
    },
    interview_experience: {
        type: String,
        default: ''
    },
    interview_tips: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0.0
    },
    date: {
        type: String,
        default: ''
    },
    category_slug: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        default: ''
    },
    additional_info: {
        type: String,
        default: ''
    },
    questions_answers: [{
        question: {
            type: String,
            default: ''
        },
        answer: {
            type: String,
            default: ''
        } 
    }]
}, { timestamps: true });

mongoose.models={}
export default mongoose.model("InterviewTranscript", InterviewTranscriptSchema);
