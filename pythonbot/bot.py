import discord, os
from discord.ext import commands, tasks
from itertools import cycle
from discord.ext.commands import CommandNotFound


# 토큰을 token.txt 에서 읽고 가져오기
token_path = os.path.dirname( os.path.abspath( __file__ ) )+"/token.txt"
t = open(token_path, "r", encoding="utf-8")
token = t.read().split()[0]

bot = commands.Bot(command_prefix=['k!', 'ㅋ'], intents=discord.Intents.all())
status = cycle(['k!도움말로 명령어 확인', '더욱더 발전하겠습니다', '이 메세지는 10초마다 한번씩 바뀝니다', '디스코드서버를 편리하게'])

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, CommandNotFound):
        embed = discord.Embed(title = ":x:Error!", description = "해당 명령어는 존재하지 않습니다.\nk!도움말으로 명령어를 찾아주세요.", color = 0x00FF21)
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)
        return
    raise error

# cogs 폴더안에 있는 파일의 확장자가 .py일때 cogs로 로드하고 로드완료 메세지 출력
for file in os.listdir("cogs"):
    if file.endswith(".py"):
        bot.load_extension(f"cogs.{file[:-3]}")
        print(f"cogs.{file[:-3]} 로드완료")

@bot.event 
async def on_ready():
    change_status.start()
    print("--------------------------------------") 
    print(f"{bot.user.name}으로 로그인 하셨습니다.")
    print("--------------------------------------")

@tasks.loop(seconds=10)
async def change_status():
    await bot.change_presence(activity=discord.Game(next(status)))


# 그리고 위에서 가져온 토큰을 로그인 할때 사용.
bot.run(token)