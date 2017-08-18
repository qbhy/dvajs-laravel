<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function fetchArticle(Request $request)
    {
        $article = [
            'id' => $request->get('id'),
            'title' => 'ssh 远程连接超时问题解决方案',
            'abstract' => 'ssh 时常断开连接？ 作为一名后端工程师，时常需要用到 terminal 远程链接到 linux 服务器中操作，例如部署环境之类的操作。但是，我们也常常会把 terminal 搁置在一边，然后做其他工作，很有可能你再切换回来的时候， ssh链接 已经因为超时断开了链接，需要你重新链接，并且如果你之前还有未完成的工作，也就中断了，很可能需要重来一次。 ssh 远程连接超时问题解决方案修改 server 端的 /etc/ssh/sshd_config$ vi /etc/ssh/sshd_configClientAliveInterval60＃server每隔60秒发送一次请求给client，然后client响应，从而保持连接ClientAliveCountMax3＃server发出请求后，客户端没有响应得次数达到...',
            'updatedAt' => Carbon::now()->diffForHumans()
        ];
        return compact('article');
    }
}
