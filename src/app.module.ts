import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
const jwtModule = require("jwt");
const AuthService = require("./auth.service");
import { UserService } from './services/user.service';
import { jwtConstants } from './constants'; // We need to define our constants for the secret key

@Module({
  imports: [
    jwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, UserService],
})
export class AppModule {}