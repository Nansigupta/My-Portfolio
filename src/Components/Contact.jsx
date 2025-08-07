import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import Swal from 'sweetalert2'; // Correct import for SweetAlert2

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 0,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    phone: yup.string().required('Phone number is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

  });

  const registerUser = async (data) => {
    console.log('Form Data:', data);

    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
  
  };
 
  return (
    <div className="container-fluid contact py-5" id="contact">
      <h2 className="heading text-center mt-5 mb-4 text-black" data-aos="fade-down">
        Contact <span>Me !</span>
      </h2>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 contact-left mx-auto" data-aos="fade-right">
          <form
            className="contact form d-flex flex-wrap justify-content-center gap-3"
            onSubmit={handleSubmit(registerUser)}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form-control input-box"
              {...register('name')}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Your Email"
              className="form-control input-box"
              {...register('email')}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input
              type="text"
              placeholder="Your Phone Number"
              className="form-control input-box"
              {...register('phone')}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}

            <input
              type="text"
              placeholder="Subject"
              className="form-control input-box"
              {...register('subject')}
            />
            {errors.subject && <p className="error">{errors.subject.message}</p>}

            <textarea
              placeholder="Your Message"
              className="form-control input-box ms-2"
              {...register('message')}
            />
            {errors.message && <p className="error">{errors.message.message}</p>}
<br />
            <button type="submit" className="btn my-3 bg-black text-light">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
