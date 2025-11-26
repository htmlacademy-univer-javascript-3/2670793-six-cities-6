import { type FC, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Sprite from '../Sprite/Sprite';
import Header from '../Header/Header';
import { useAppDispatch, login } from '../../store';
import type { LoginData } from '../../types/auth';

const Login: FC = () => {
  const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Очищаем ошибку при изменении полей
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await dispatch(login(formData)).unwrap();
      navigate('/');
    } catch (err) {
      setError('Неверный email или пароль');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Sprite />
      <div className="page page--gray page--login">
        <Header />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" onSubmit={(evt) => void handleSubmit(evt)}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {error && <p className="login__error" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
                <button
                  className="login__submit form__submit button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
