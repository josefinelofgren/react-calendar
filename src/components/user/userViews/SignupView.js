// import libaries
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

// import components
import Container from 'react-bootstrap/Container';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SignupView({handleSubmit, email, setEmail, passOne, setPassOne, passTwo, setPassTwo}){

    return(
        <Container>
            <form onSubmit={e => handleSubmit(e)}>
                <FormGroup>
                <div className='form-box'>
                        <Link 
                          className='form-box-content'
                          to='/users/login'>
                            <div className='fw-bold'>
                               <AiOutlineUser className='form-icon' />
                               <br /> 
                               Logga in
                             </div>
                        </Link>
                        <div className='form-box-content transparent'></div>
                        <Link 
                          className='form-box-content is-active'
                          to='/users/signup'>
                            <div className='fw-bold'>
                               <AiOutlineUser className='form-icon' />
                               <br /> 
                               Skapa konto
                             </div>
                        </Link>
                    </div>
                    <Button className='fw-bold facebook'>
                        <FaFacebookF className='btn-icon' /> 
                        {' '}
                        Fortsätt med Facebook
                    </Button>
                    <Button className='fw-bold google'>
                        <FcGoogle className='btn-cion' /> 
                        {' '}
                        Fortsätt med Google
                    </Button>
                    <p className='form-or'> 
                        <span>eller</span>
                    </p>
                    <FormControl
                        required
                        type='text'
                        id='email'
                        placeholder='E-post'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <FormControl
                        required
                        type='text'
                        id='passOne'
                        placeholder='Lösenord'
                        name='passOne'
                        value={passOne}
                        onChange={e => setPassOne(e.target.value)}
                        />
                    <FormControl
                        required
                        type='text'
                        id='passTwo'
                        placeholder='Upprepa lösenord'
                        name='passTwo'
                        value={passTwo}
                        onChange={e => setPassTwo(e.target.value)}
                        />
                    <Button type='submit' className='fw-bold'>Registrera</Button>
                </FormGroup>
                <p>Har du redan ett konto?<Link to='/users/login' className='text-color'> Logga in</Link></p>
            </form>
        </Container>
    )
}

export default SignupView;