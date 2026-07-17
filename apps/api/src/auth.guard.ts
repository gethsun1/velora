import {CanActivate,ExecutionContext,ForbiddenException,Injectable,UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
@Injectable()
export class AdminGuard implements CanActivate{
 constructor(private jwt:JwtService){}
 async canActivate(context:ExecutionContext){
  const request=context.switchToHttp().getRequest<{headers:{authorization?:string};user?:unknown}>();
  const token=request.headers.authorization?.replace(/^Bearer\s+/,'');
  if(!token)throw new UnauthorizedException('Authentication required');
  try{const user=await this.jwt.verifyAsync<{type:string}>(token,{secret:process.env.JWT_ACCESS_SECRET});if(user.type!=='ADMIN')throw new ForbiddenException('Administrator permission required');request.user=user;return true}catch(error){if(error instanceof ForbiddenException)throw error;throw new UnauthorizedException('Invalid or expired access token')}
 }
}
