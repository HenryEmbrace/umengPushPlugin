//
//  umengPush.h
//  MyApp
//
//  Created by ZlHy on 2019/9/29.
//

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

NS_ASSUME_NONNULL_BEGIN

@interface umengPush : CDVPlugin
- (void)addTag:(CDVInvokedUrlCommand*)command;
- (void)delTag:(CDVInvokedUrlCommand*)command;
- (void)listTag:(CDVInvokedUrlCommand*)command;
- (void)addAlias:(CDVInvokedUrlCommand*)command;
- (void)delAlias:(CDVInvokedUrlCommand*)command;
- (void)setAlias:(CDVInvokedUrlCommand*)command;
@end

NS_ASSUME_NONNULL_END
