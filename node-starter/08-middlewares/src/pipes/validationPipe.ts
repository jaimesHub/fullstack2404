// Pipe để xác thực thông tin đầu vào khi đăng ký người dùng
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';

const validationPipe = (type: any): RequestHandler => {
    return async (req, res, next) => {
        const object = plainToInstance(type, req.body);
        const errors = await validate(object);

        if (errors.length > 0) {
            const message = errors
                .map((error: ValidationError) => Object.values(error.constraints || {}))
                .join(', ');
            res.status(400).send({ message });
            return;
        }

        req.body = object;
        next();
    };
};

export default validationPipe;